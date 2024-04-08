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

  constructor(private cdr: ChangeDetectorRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    this.createLineChart(this.chartCanvas);
    this.createBarChart(this.chartCanvas3);
    this.cdr.detectChanges();
  }

  createLineChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      new Chart(context, {
        type: 'line',
        data: {
          labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"],
          datasets: [{
            label: 'Dataset de Líneas',
            data: [65, 59, 80, 81, 56, 55, 40],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }]
        },
        options: {
          responsive: true,
        },
      });
    }
  }




  createBarChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      new Chart(context, {
        type: 'bar',
        data: {
          labels: ["Enero", "Febrero", "Marzo", "Abril"],
          datasets: [{
            label: 'Dataset de Barras',
            data: [65, 59, 80, 81],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)'
            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(54, 162, 235)',
              'rgb(255, 206, 86)',
              'rgb(75, 192, 192)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        },
      });
    }
  }

  createRadarChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      new Chart(context, {
        type: 'radar',
        data: {
          labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
          datasets: [{
            label: 'Dataset de Radar',
            data: [65, 59, 90, 81, 56, 55, 40],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)'
          }]
        },
        options: {
          elements: {
            line: {
              borderWidth: 3
            }
          }
        },
      });
    }
  }
}
