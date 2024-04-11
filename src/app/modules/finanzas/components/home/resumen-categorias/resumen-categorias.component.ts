import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-categorias',
  templateUrl: './resumen-categorias.component.html',
  styleUrls: ['./resumen-categorias.component.scss']
})
export class ResumenCategoriasComponent implements AfterViewInit {
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef<HTMLCanvasElement>;
  categoriasData: any[] = [];

  constructor(private cdr: ChangeDetectorRef, private finanzasService: FinanzasServiceService) {
    Chart.register(...registerables);
    this.finanzasService.getGastosMes().subscribe(data => {
      this.processData(data);
    });
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  processData(data: any[]) {
    // Agrupando datos por categoría
    const groupedData = data.reduce((acc, curr) => {
      const found = acc.find((item: any) => item.nombre === curr.NombreCategoria);
      if (found) {
        found.valor += curr.Monto;
      } else {
        acc.push({
          nombre: curr.NombreCategoria,
          valor: curr.Monto,
          color: curr.ColorCategoria
        });
      }
      return acc;
    }, []);

    this.categoriasData = groupedData;
    this.createPieChart();
  }

  createPieChart() {
    const canvas = this.chartCanvas2.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      new Chart(context, {
        type: 'doughnut',
        data: {
          labels: this.categoriasData.map(c => c.nombre),
          datasets: [{
            data: this.categoriasData.map(c => c.valor),
            backgroundColor: this.categoriasData.map(c => c.color),
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  }
}
