import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-resumen-saldo',
  templateUrl: './resumen-saldo.component.html',
  styleUrls: ['./resumen-saldo.component.scss']
})
export class ResumenSaldoComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  datos = {
    "saldoTotal": 3250,
    "transacciones": [
      {
        "fecha": "2024-03-09",
        "monto": 500,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-10",
        "monto": 200,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-11",
        "monto": 100,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-12",
        "monto": 350,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-13",
        "monto": 700,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-14",
        "monto": 50,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-15",
        "monto": 100,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-16",
        "monto": 150,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-17",
        "monto": 200,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-18",
        "monto": 300,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-19",
        "monto": 250,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-20",
        "monto": 450,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-21",
        "monto": 150,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-22",
        "monto": 200,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-23",
        "monto": 300,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-24",
        "monto": 100,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-25",
        "monto": 200,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-26",
        "monto": 50,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-27",
        "monto": 400,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-28",
        "monto": 100,
        "tipo": "gasto"
      },
      {
        "fecha": "2024-03-29",
        "monto": 300,
        "tipo": "ingreso"
      },
      {
        "fecha": "2024-03-30",
        "monto": 150,
        "tipo": "gasto"
      }
    ]
  }

  ngAfterViewInit(): void {
    this.createLineChart(this.chartCanvas);
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
          plugins: {
            legend: { display: false }
          },
          responsive: true,
        }
      });
    }
  }


}
