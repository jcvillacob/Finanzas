import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import annotationPlugin from 'chartjs-plugin-annotation';
import Swal from 'sweetalert2';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-metas',
  templateUrl: './metas.component.html',
  styleUrls: ['./metas.component.scss']
})
export class MetasComponent implements AfterViewInit {
  @ViewChild('chartMetas') chartMetas!: ElementRef<HTMLCanvasElement>;
  metas: any[] = [];
  metaSelected: any = {MetaAhorroID: 0};
  avancesMetas: any[] = [];
  chartInstance: Chart | null = null;
  iconos!: any[];

  /* Para crear Meta */
  nombre!: string;
  fechaObjetivo!: string;
  icono!: string;
  monto!: number;
  descripcion!: number;

  /* Para guardar avance */
  fechaAvance!: string;
  montoAvance!: number;
  metaAvance!: number;

  constructor(private finanzasService: FinanzasServiceService) {
    this.getMetas();
    Chart.register(...registerables, annotationPlugin);
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  setIcon(icon: string) {
    this.icono = icon
  }

  getMetas() {
    this.finanzasService.getMetas().subscribe(data => {
      this.metas = data.filter(m => m.MontoAhorrado < m.MontoObjetivo);
      if (this.metas.length > 0) {
        this.metaSelected = this.metas[0];
        this.getAvanceMeta(this.metaSelected.MetaAhorroID);
      } else {
        this.metaSelected = { MetaAhorroID: 0 };
      }
      this.finanzasService.getIconos().subscribe(data => {
        this.iconos = data;
      });
    });
  }


  getAvanceMeta(MetaAhorroID: number) {
    this.finanzasService.getAvancesMetas(MetaAhorroID).subscribe(data => {
      this.avancesMetas = data;
      this.createLineChart(this.chartMetas);
    })
  }

  selecccionarMeta(metaAhorro: any) {
    this.metaSelected = metaAhorro;
    this.getAvanceMeta(metaAhorro.MetaAhorroID);
  }

  crearMeta() {
    if (!this.fechaObjetivo || !this.monto || !this.nombre || !this.icono || !this.fechaObjetivo) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `La meta No ha sido creada.`,
        'error'
      )
      return
    }
    const data = {
      fechaCreacion: new Date().toISOString().toString(),
      fechaObjetivo: this.fechaObjetivo,
      montoObjetivo: this.monto,
      nombre: this.nombre,
      icono: this.icono,
      descripcion: this.descripcion,
      usuarioID: 1
    }
    this.finanzasService.crearMeta(data).subscribe(data => {
      this.getMetas();
      Swal.fire(
        'Meta Creada',
        `La meta ha sido creada exitosamente.`,
        'success'
      )
    })
  }

  crearAvance() {
    if (!this.metaAvance || !this.montoAvance || !this.fechaAvance) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `El avance No ha sido registrado.`,
        'error'
      )
      return
    }
    const data = {
      metaAhorroID: this.metaAvance,
      monto: this.montoAvance,
      fecha: this.fechaAvance
    }
    this.finanzasService.crearAvanceMeta(data).subscribe(data => {
      this.getMetas();
      Swal.fire(
        'Avance guardado',
        `el avance ha sido creada exitosamente.`,
        'success'
      )
    })
  }

  createLineChart(canvas: ElementRef<HTMLCanvasElement>) {
    const context = canvas.nativeElement.getContext('2d');
    if (context) {
      // Si ya existe una instancia de gráfico, la destruye
      if (this.chartInstance) {
        this.chartInstance.destroy();
      }

      let objetivo = this.metaSelected.MontoObjetivo;
      let inicial = 0;
      let FechaCreacion = this.metaSelected.FechaCreacion;
      const saldosDiarios = this.avancesMetas.map((transaccion) => {
        inicial += transaccion.Monto;
        return { Fecha: transaccion.Fecha, saldo: inicial };
      });

      const labels = saldosDiarios.map(d => d.Fecha);
      const data = saldosDiarios.map((d) => d.saldo);

      labels.unshift(FechaCreacion);
      data.unshift(0);

      // Crea un nuevo gráfico y lo almacena en chartInstance
      this.chartInstance = new Chart(context, {
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
            annotation: {
              annotations: {
                line1: {
                  type: 'line',
                  yMin: objetivo,
                  yMax: objetivo,
                  borderColor: 'rgb(255, 99, 132)',
                  borderWidth: 2,
                  borderDash: [10, 5]
                }
              }
            }
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
