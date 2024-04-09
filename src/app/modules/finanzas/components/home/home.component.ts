import { ChangeDetectorRef, Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { initFlowbite } from 'flowbite';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef<HTMLCanvasElement>;
  modal = { movimiento: 'Gasto' };

  constructor(private cdr: ChangeDetectorRef) {
    Chart.register(...registerables);
  }

  ngAfterViewInit() {
    initFlowbite();
    this.cdr.detectChanges();
  }

  actualizarModal(movimiento: string) {
    this.modal.movimiento = movimiento;
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

}
