import { ChangeDetectorRef, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartCanvas3') chartCanvas3!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartCanvas4') chartCanvas4!: ElementRef<HTMLCanvasElement>;
  labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"];
  data = {
    labels: this.labels,
    datasets: [{
      label: 'My First Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  };

  constructor(private cdr: ChangeDetectorRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createChart(this.chartCanvas, this.data);
    this.createChart(this.chartCanvas2, this.data);
    this.createChart(this.chartCanvas3, this.data); // Asegúrate de definir data adecuadamente para cada gráfico
    this.createChart(this.chartCanvas4, this.data);
    this.cdr.detectChanges();
  }

  createChart(canvas: ElementRef<HTMLCanvasElement>, data: any) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      new Chart(context, {
        type: 'line',
        data: data,
        options: {
          responsive: true,
          // Opciones de gráfico adicionales van aquí...
        },
      });
    }
  }
}
