import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';

@Component({
  selector: 'app-resumen-saldo',
  templateUrl: './resumen-saldo.component.html',
  styleUrls: ['./resumen-saldo.component.scss'],
})
export class ResumenSaldoComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  datos = {
    saldoTotal: 3250,
    transacciones: [
      {
        fecha: '2024-03-09',
        monto: 500,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-10',
        monto: 200,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-11',
        monto: 100,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-12',
        monto: 350,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-13',
        monto: 700,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-14',
        monto: 50,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-15',
        monto: 100,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-16',
        monto: 150,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-17',
        monto: 200,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-18',
        monto: 300,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-19',
        monto: 250,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-20',
        monto: 450,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-21',
        monto: 150,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-22',
        monto: 200,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-23',
        monto: 300,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-24',
        monto: 100,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-25',
        monto: 200,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-26',
        monto: 50,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-27',
        monto: 400,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-28',
        monto: 100,
        tipo: 'gasto',
      },
      {
        fecha: '2024-03-29',
        monto: 300,
        tipo: 'ingreso',
      },
      {
        fecha: '2024-03-30',
        monto: 150,
        tipo: 'gasto',
      },
    ],
  };

  constructor() {
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    this.createLineChart(this.chartCanvas);
  }

  createLineChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      // Paso 1: Ordenar las transacciones por fecha en orden descendente.
      const sortedTransactions = this.datos.transacciones.sort((a, b) =>
        b.fecha.localeCompare(a.fecha)
      );

      // Paso 2: Calcular el saldo diario.
      let saldo = this.datos.saldoTotal;
      const saldosDiarios = sortedTransactions
        .map((transaccion) => {
          if (transaccion.tipo === 'ingreso') {
            saldo -= transaccion.monto; // Restar al saldo si es ingreso ya que vamos en reversa
          } else {
            saldo += transaccion.monto; // Sumar al saldo si es gasto
          }
          return { fecha: transaccion.fecha, saldo };
        })
        .reverse(); // Invertir para tener los datos en orden cronológico

      // Paso 3: Generar las etiquetas (fechas) y los datos (saldos) para el gráfico
      const labels = saldosDiarios.map((d) => d.fecha);
      const data = saldosDiarios.map((d) => d.saldo);

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
          },
          plugins: {
            legend: { display: false },
          },
          responsive: true,
        },
      });
    }
  }
}
