import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements AfterViewInit {
  @ViewChild('chartDeudas') chartDeudas!: ElementRef<HTMLCanvasElement>;
  deudas = [
    {
      "DeudaID": 1,
      "Nombre": "Tio de JD",
      "Icono": 'fa-solid fa-user',
      "MontoTotal": 1100000,
      "MontoPendiente": 10000,
      "FechaCreacion": "2024-04-05T15:00:00.000Z"
    },
    {
      "DeudaID": 3,
      "Nombre": "Bancolombia",
      "Icono": 'fa-solid fa-credit-card',
      "MontoTotal": 100000,
      "MontoPendiente": 50000,
      "FechaCreacion": "2024-04-05T15:00:00.000Z"
    },
    {
      "DeudaID": 2,
      "Nombre": "ICETEX",
      "Icono": 'fa-solid fa-graduation-cap',
      "MontoTotal": 1100000,
      "MontoPendiente": 350000,
      "FechaCreacion": "2024-04-05T15:00:00.000Z"
    },
  ];

  pagosDeuda = [
    {
      "PagoDeudaID": 1,
      "DeudaID": 2,
      "Monto": 50000,
      "Fecha": "2024-04-09T15:00:00.000Z"
    },
    {
      "PagoDeudaID": 2,
      "DeudaID": 2,
      "Monto": 100000,
      "Fecha": "2024-04-15T15:00:00.000Z"
    },
    {
      "PagoDeudaID": 3,
      "DeudaID": 2,
      "Monto": 600000,
      "Fecha": "2024-04-25T15:00:00.000Z"
    }
  ];

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createLineChart(this.chartDeudas);
  }

  transformData() {

  }

  createLineChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      let saldoI = 1100000;
      let saldo = 1100000;
      let FechaCreacion = "2024-04-05T15:00:00.000Z";
      const saldosDiarios = this.pagosDeuda
        .map((transaccion) => {
          saldo -= transaccion.Monto;
          return { Fecha: transaccion.Fecha, saldo };
        });

      // Paso 3: Generar las etiquetas (fechas) y los datos (saldos) para el gráfico
      const labels = saldosDiarios.map(d => d.Fecha);
      const data = saldosDiarios.map((d) => d.saldo);

      labels.unshift(FechaCreacion);
      data.unshift(saldoI);

      // Paso 4: Configurar el gráfico
      new Chart(context, {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Saldo diario del último mes',
              data,
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              type: 'time',
              time: {
                unit: 'day',
                tooltipFormat: 'yyyy-MM-dd',
                displayFormats: {
                  day: 'yyyy-MM-dd',
                },
              },
            },
            y: {
              min: 0
            }
          },
          plugins: {
            legend: { display: false },
          },
          responsive: true,
        },
      });
    }
  }

  goBack() {
    window.history.back();
  }

}
