import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import 'chartjs-adapter-date-fns';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-saldo',
  templateUrl: './resumen-saldo.component.html',
  styleUrls: ['./resumen-saldo.component.scss'],
})
export class ResumenSaldoComponent implements AfterViewInit {
  @ViewChild('chartCanvas') chartCanvas!: ElementRef<HTMLCanvasElement>;
  saldoTotal!: number;
  transacciones: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getDatos();
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
  }

  getDatos() {
    this.finanzasService.getCuentas().subscribe(data => {
      this.saldoTotal = data.reduce((acc, curr) => acc + curr.Saldo, 0);
      this.finanzasService.getTransaccionByUser().subscribe(data => {
        this.transacciones = data;
        this.createLineChart(this.chartCanvas);
      });
    });
  }

  createLineChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      // Paso 1: Ordenar las transacciones por fecha en orden descendente.
      const sortedTransactions = this.transacciones.sort((a, b) =>
        b.Fecha.localeCompare(a.Fecha)
      );

      // Paso 2: Calcular el saldo diario de manera correcta.
      let saldo = this.saldoTotal;

      const saldosDiarios: any[] = [];
      sortedTransactions.forEach(transaccion => {
        if (transaccion.Tipo === 'Ingreso') {
          saldo -= transaccion.Monto; // Restar al saldo si es ingreso, vamos en reversa
        } else if (transaccion.Tipo === 'Gasto') {
          saldo += transaccion.Monto; // Sumar al saldo si es gasto
        }
        // Almacenar el saldo después de procesar cada transacción
        saldosDiarios.push({ fecha: transaccion.Fecha, saldo: saldo });
      });

      // No necesitamos revertir la lista, la graficamos como está, del más reciente al más antiguo
      const labels = saldosDiarios.map(d => d.fecha);
      let data = saldosDiarios.map(d => d.saldo);
      data.unshift(this.saldoTotal);
      data.pop();

      // Paso 3: Configurar el gráfico
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
