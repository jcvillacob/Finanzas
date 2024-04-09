import { Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';


@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.scss']
})
export class GastosComponent {
  @ViewChild('chartGastos') chartGastos!: ElementRef<HTMLCanvasElement>;
  @ViewChild('chartGastosB') chartGastosB!: ElementRef<HTMLCanvasElement>;
  datos = {
    saldoTotal: 3250,
    transacciones: [
      {
        "TransaccionID": 1,
        "CuentaID": 1,
        "CategoriaID": 2,
        "Tipo": "Gasto",
        "Monto": 75000,
        "Fecha": "2024-03-09T12:30:00.000Z",
        "Descripcion": "Compra en supermercado",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Comestibles"
      },
      {
        "TransaccionID": 2,
        "CuentaID": 2,
        "CategoriaID": 3,
        "Tipo": "Gasto",
        "Monto": 30000,
        "Fecha": "2024-03-10T18:45:00.000Z",
        "Descripcion": "Gasolina para el auto",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Transporte"
      },
      {
        "TransaccionID": 3,
        "CuentaID": 3,
        "CategoriaID": 4,
        "Tipo": "Gasto",
        "Monto": 200000,
        "Fecha": "2024-03-11T10:15:00.000Z",
        "Descripcion": "Pago de la hipoteca",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Vivienda"
      },
      {
        "TransaccionID": 4,
        "CuentaID": 1,
        "CategoriaID": 5,
        "Tipo": "Ingreso",
        "Monto": 150000,
        "Fecha": "2024-03-12T14:00:00.000Z",
        "Descripcion": "Ingreso salario",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Ingreso"
      },
      {
        "TransaccionID": 5,
        "CuentaID": 2,
        "CategoriaID": 1,
        "Tipo": "Gasto",
        "Monto": 60000,
        "Fecha": "2024-03-13T09:20:00.000Z",
        "Descripcion": "Pago de arriendo",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Arriendo"
      },
      {
        "TransaccionID": 6,
        "CuentaID": 3,
        "CategoriaID": 2,
        "Tipo": "Gasto",
        "Monto": 45000,
        "Fecha": "2024-03-14T16:45:00.000Z",
        "Descripcion": "Compra en tienda de electrónicos",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Comestibles"
      },
      {
        "TransaccionID": 7,
        "CuentaID": 1,
        "CategoriaID": 3,
        "Tipo": "Gasto",
        "Monto": 20000,
        "Fecha": "2024-03-15T11:30:00.000Z",
        "Descripcion": "Peaje en la autopista",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Transporte"
      },
      {
        "TransaccionID": 8,
        "CuentaID": 2,
        "CategoriaID": 4,
        "Tipo": "Gasto",
        "Monto": 100000,
        "Fecha": "2024-03-16T08:00:00.000Z",
        "Descripcion": "Pago de la factura de electricidad",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Servicios"
      },
      {
        "TransaccionID": 9,
        "CuentaID": 3,
        "CategoriaID": 5,
        "Tipo": "Ingreso",
        "Monto": 120000,
        "Fecha": "2024-03-17T14:20:00.000Z",
        "Descripcion": "Ingreso por venta de muebles",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Ingreso"
      },
      {
        "TransaccionID": 10,
        "CuentaID": 1,
        "CategoriaID": 1,
        "Tipo": "Gasto",
        "Monto": 50000,
        "Fecha": "2024-03-18T13:45:00.000Z",
        "Descripcion": "Cena en restaurante",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Alimentación"
      },
      {
        "TransaccionID": 11,
        "CuentaID": 2,
        "CategoriaID": 2,
        "Tipo": "Gasto",
        "Monto": 80000,
        "Fecha": "2024-03-19T17:30:00.000Z",
        "Descripcion": "Compra en tienda de ropa",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Comestibles"
      },
      {
        "TransaccionID": 12,
        "CuentaID": 3,
        "CategoriaID": 3,
        "Tipo": "Gasto",
        "Monto": 40000,
        "Fecha": "2024-03-20T10:00:00.000Z",
        "Descripcion": "Pago de gas",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Transporte"
      },
      {
        "TransaccionID": 13,
        "CuentaID": 1,
        "CategoriaID": 4,
        "Tipo": "Gasto",
        "Monto": 150000,
        "Fecha": "2024-03-21T12:15:00.000Z",
        "Descripcion": "Compra de muebles",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Vivienda"
      },
      {
        "TransaccionID": 14,
        "CuentaID": 2,
        "CategoriaID": 5,
        "Tipo": "Ingreso",
        "Monto": 180000,
        "Fecha": "2024-03-22T09:10:00.000Z",
        "Descripcion": "Ingreso por venta de libros",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Ingreso"
      },
      {
        "TransaccionID": 15,
        "CuentaID": 3,
        "CategoriaID": 1,
        "Tipo": "Gasto",
        "Monto": 70000,
        "Fecha": "2024-03-23T14:40:00.000Z",
        "Descripcion": "Pago de alquiler",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Arriendo"
      },
      {
        "TransaccionID": 16,
        "CuentaID": 1,
        "CategoriaID": 2,
        "Tipo": "Gasto",
        "Monto": 50000,
        "Fecha": "2024-03-24T11:20:00.000Z",
        "Descripcion": "Compra en tienda de electrónicos",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Comestibles"
      },
      {
        "TransaccionID": 17,
        "CuentaID": 2,
        "CategoriaID": 3,
        "Tipo": "Gasto",
        "Monto": 30000,
        "Fecha": "2024-03-25T15:50:00.000Z",
        "Descripcion": "Recarga de combustible",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Transporte"
      },
      {
        "TransaccionID": 18,
        "CuentaID": 3,
        "CategoriaID": 4,
        "Tipo": "Gasto",
        "Monto": 220000,
        "Fecha": "2024-03-26T10:35:00.000Z",
        "Descripcion": "Pago de la cuota del préstamo",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Vivienda"
      },
      {
        "TransaccionID": 19,
        "CuentaID": 1,
        "CategoriaID": 5,
        "Tipo": "Ingreso",
        "Monto": 170000,
        "Fecha": "2024-03-27T13:00:00.000Z",
        "Descripcion": "Ingreso por bonificación laboral",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Ingreso"
      },
      {
        "TransaccionID": 20,
        "CuentaID": 2,
        "CategoriaID": 1,
        "Tipo": "Gasto",
        "Monto": 60000,
        "Fecha": "2024-03-28T08:30:00.000Z",
        "Descripcion": "Pago de alquiler",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Arriendo"
      },
      {
        "TransaccionID": 21,
        "CuentaID": 3,
        "CategoriaID": 2,
        "Tipo": "Gasto",
        "Monto": 55000,
        "Fecha": "2024-03-29T14:45:00.000Z",
        "Descripcion": "Compra en tienda de electrodomésticos",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Comestibles"
      },
      {
        "TransaccionID": 22,
        "CuentaID": 1,
        "CategoriaID": 3,
        "Tipo": "Gasto",
        "Monto": 25000,
        "Fecha": "2024-03-30T11:00:00.000Z",
        "Descripcion": "Pago de peaje",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Transporte"
      },
      {
        "TransaccionID": 23,
        "CuentaID": 2,
        "CategoriaID": 4,
        "Tipo": "Gasto",
        "Monto": 120000,
        "Fecha": "2024-03-31T09:25:00.000Z",
        "Descripcion": "Pago de la factura de agua",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Servicios"
      },
      {
        "TransaccionID": 24,
        "CuentaID": 3,
        "CategoriaID": 5,
        "Tipo": "Ingreso",
        "Monto": 140000,
        "Fecha": "2024-04-01T13:30:00.000Z",
        "Descripcion": "Ingreso por venta de antigüedades",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Ingreso"
      },
      {
        "TransaccionID": 25,
        "CuentaID": 1,
        "CategoriaID": 1,
        "Tipo": "Gasto",
        "Monto": 45000,
        "Fecha": "2024-04-02T10:15:00.000Z",
        "Descripcion": "Compra de alimentos",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Alimentación"
      },
      {
        "TransaccionID": 26,
        "CuentaID": 2,
        "CategoriaID": 2,
        "Tipo": "Gasto",
        "Monto": 70000,
        "Fecha": "2024-04-03T16:20:00.000Z",
        "Descripcion": "Compra en tienda de tecnología",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Comestibles"
      },
      {
        "TransaccionID": 27,
        "CuentaID": 3,
        "CategoriaID": 3,
        "Tipo": "Gasto",
        "Monto": 35000,
        "Fecha": "2024-04-04T11:50:00.000Z",
        "Descripcion": "Recarga de combustible",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Transporte"
      },
      {
        "TransaccionID": 28,
        "CuentaID": 1,
        "CategoriaID": 4,
        "Tipo": "Gasto",
        "Monto": 180000,
        "Fecha": "2024-04-05T14:00:00.000Z",
        "Descripcion": "Pago de la cuota del préstamo hipotecario",
        "NombreCuenta": "Banco Popular",
        "NombreCategoria": "Vivienda"
      },
      {
        "TransaccionID": 29,
        "CuentaID": 2,
        "CategoriaID": 5,
        "Tipo": "Ingreso",
        "Monto": 160000,
        "Fecha": "2024-04-06T12:10:00.000Z",
        "Descripcion": "Ingreso por bonificación laboral",
        "NombreCuenta": "Banco Santander",
        "NombreCategoria": "Ingreso"
      },
      {
        "TransaccionID": 30,
        "CuentaID": 3,
        "CategoriaID": 1,
        "Tipo": "Gasto",
        "Monto": 50000,
        "Fecha": "2024-04-07T09:30:00.000Z",
        "Descripcion": "Compra en supermercado",
        "NombreCuenta": "Davivienda",
        "NombreCategoria": "Alimentación"
      }
    ]
  };

  constructor() {
    Chart.register(...registerables, annotationPlugin);
  }

  ngAfterViewInit(): void {
    const { labels, data } = this.processData(this.datos.transacciones);
    this.createLineChart(this.chartGastos, labels, data);
    this.createBarChart(this.chartGastosB);
  }

  processData(transacciones: any[]): { labels: string[], data: number[] } {
    const gastosPorDia = new Map();

    // Filtrar y sumar montos por día
    transacciones.forEach(tx => {
      if (tx.Tipo === 'Gasto') {
        const fecha = tx.Fecha.split('T')[0];
        const monto = tx.Monto;
        gastosPorDia.set(fecha, (gastosPorDia.get(fecha) || 0) + monto);
      }
    });

    // Ordenar y preparar labels y data
    const labels = Array.from(gastosPorDia.keys()).sort();
    const data = labels.map(label => gastosPorDia.get(label));

    return { labels, data };
  }

  createLineChart(canvas: ElementRef<HTMLCanvasElement>, labels: string[], data: number[]): void {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      const promedio = data.reduce((acc, val) => acc + val, 0) / data.length;

      new Chart(context, {
        type: 'line',
        data: {
          labels,
          datasets: [{
            label: 'Gastos Último Mes',
            data,
            pointStyle: 'circle',
            pointRadius: 10,
            pointHoverRadius: 15,
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          }],
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
              beginAtZero: true
            }
          },
          plugins: {
            legend: { display: true },
            annotation: {
              annotations: {
                promedioGastos: {
                  type: 'line',
                  yMin: promedio,
                  yMax: promedio,
                  borderColor: 'rgb(255, 99, 132)',
                  borderWidth: 2,
                  borderDash: [10, 5],
                  label: {
                    content: 'Promedio',
                    position: 'start',
                    backgroundColor: 'rgba(255, 99, 132, 0.75)',
                  }
                }
              }
            }
          },
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
          datasets: [
            {
              label: 'Dataset 1',
              data: [65, 59, 80, 81],
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgb(255, 99, 132)',
              borderWidth: 1
            },
            {
              label: 'Dataset 2',
              data: [28, 48, 40, 19],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgb(54, 162, 235)',
              borderWidth: 1
            },
            {
              label: 'Dataset 3',
              data: [12, 20, 30, 45],
              backgroundColor: 'rgba(255, 206, 86, 0.2)',
              borderColor: 'rgb(255, 206, 86)',
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            y: {
              stacked: true,
              beginAtZero: true
            },
            x: {
              stacked: true
            }
          }
        },
      });
    }
  }

  goBack() {
    window.history.back();
  }

}
