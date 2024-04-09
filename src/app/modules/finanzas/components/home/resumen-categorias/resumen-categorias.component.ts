import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-resumen-categorias',
  templateUrl: './resumen-categorias.component.html',
  styleUrls: ['./resumen-categorias.component.scss']
})
export class ResumenCategoriasComponent implements AfterViewInit {
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef<HTMLCanvasElement>;
  categoriasData = [
    { nombre: "Arriendo", valor: 300, color: 'rgb(255, 99, 132)' },
    { nombre: "Comida", valor: 50, color: 'rgb(54, 162, 235)' },
    { nombre: "Mecatos", valor: 100, color: 'rgb(255, 205, 86)' },
    { nombre: "Ropa", valor: 75, color: 'rgb(75, 192, 192)' }
  ];


  constructor(private cdr: ChangeDetectorRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createPieChart(this.chartCanvas2);
    this.cdr.detectChanges();
  }

  createPieChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      new Chart(context, {
        type: 'doughnut',
        data: {
          labels: this.categoriasData.map(c => c.nombre),
          datasets: [{
            data: this.categoriasData.map(c => c.valor),
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 205, 86)',
              'rgb(75, 192, 192)'
            ],
          }]
        },
        options: {
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  }

}
