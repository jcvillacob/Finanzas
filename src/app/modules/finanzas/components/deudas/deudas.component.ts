import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import Swal from 'sweetalert2';
import { initFlowbite } from 'flowbite';
import { AuthService } from 'src/app/core/authentication/auth.service';

@Component({
  selector: 'app-deudas',
  templateUrl: './deudas.component.html',
  styleUrls: ['./deudas.component.scss']
})
export class DeudasComponent implements AfterViewInit {
  @ViewChild('chartDeudas') chartDeudas!: ElementRef<HTMLCanvasElement>;
  deudas: any[] = [];
  deudaSelected!: any;
  pagosDeuda: any[] = [];
  chartInstance: Chart | null = null;
  usuarioID!: number;
  cuentas: any[] = [];
  iconos!: any[];

  /* Para crear Deuda */
  nombre!: string;
  fecha!: string;
  icono!: string;
  monto!: number;

  /* Para pagar Deuda */
  montoPago!: number;
  deudaPago!: number;
  fechaPago!: string;
  cuentaPago!: number;

  constructor(private finanzasService: FinanzasServiceService, private authService: AuthService) {
    this.getDeudas();
    this.usuarioID = this.authService.getUsuarioID();
    Chart.register(...registerables);
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  setIcon(icon: string) {
    this.icono = icon
  }

  getDeudas(){
    this.finanzasService.getDeudas().subscribe(data => {
      this.deudas = data.filter(d => d.MontoPendiente > 0);
      this.deudaSelected = this.deudas[0];
      this.getPagosDeuda(this.deudaSelected.DeudaID);
      this.finanzasService.getCuentas().subscribe(data => {
        this.cuentas = data;
        this.finanzasService.getIconos().subscribe(data => {
          this.iconos = data;
        })
      });
    });
  }

  getPagosDeuda(deudaID: number) {
    this.finanzasService.getPagosDeudas(deudaID).subscribe(data => {
      this.pagosDeuda = data;
      this.createLineChart(this.chartDeudas);
    })
  }

  pagarDeuda() {
    if (!this.montoPago || !this.deudaPago  || !this.fechaPago) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `El pago No ha sido registrado.`,
        'error'
      )
      return
    }
    const data = {
      monto: this.montoPago,
      deudaID: this.deudaPago,
      cuentaID: this.cuentaPago,
      fecha: this.fechaPago
    }
    this.finanzasService.createPagosDeudas(data).subscribe(data => {
      this.getDeudas();
      Swal.fire(
        'Pago Registrado',
        `El pago ha sido registrado exitosamente.`,
        'success'
      )
    })
  }

  crearDeuda() {
    if (!this.fecha || !this.monto || !this.nombre || !this.icono) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `La deuda No ha sido creada.`,
        'error'
      )
      return
    }
    const data = {
      fechaCreacion: this.fecha,
      montoTotal: this.monto,
      nombre: this.nombre,
      icono: this.icono,
      usuarioID: this.usuarioID

    }
    this.finanzasService.createDeuda(data).subscribe(data => {
      this.getDeudas();
      Swal.fire(
        'Deuda Creada',
        `La deuda ha sido creada exitosamente.`,
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

      let saldoI = this.deudaSelected.MontoTotal;
      let saldo = this.deudaSelected.MontoTotal;
      let FechaCreacion = this.deudaSelected.FechaCreacion;
      const saldosDiarios = this.pagosDeuda.map((transaccion) => {
          saldo -= transaccion.Monto;
          return { Fecha: transaccion.Fecha, saldo };
      });

      const labels = saldosDiarios.map(d => d.Fecha);
      const data = saldosDiarios.map((d) => d.saldo);

      labels.unshift(FechaCreacion);
      data.unshift(saldoI);

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
