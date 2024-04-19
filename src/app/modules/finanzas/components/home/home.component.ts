import { ChangeDetectorRef, Component, ElementRef, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { initFlowbite } from 'flowbite';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import Swal from 'sweetalert2';
import { forkJoin } from 'rxjs';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit, OnInit {
  @ViewChild('chartCanvas2') chartCanvas2!: ElementRef<HTMLCanvasElement>;
  modal = { movimiento: 'Gasto' };

  /* Para los cards */
  saldoActual: number = 0;
  gastosMes: number = 0;
  gastosPMes: number = 0;
  deudas: number = 0;
  presupuesto: number = 0;
  presupuestoTotal: number = 0;
  cumplimientoPresupuesto: number = 0;

  /* Para los dropdown */
  cuentas!: any[];
  categorias!: any[];
  categoriasSelected!: any[];

  /* Para crear las transacciones */
  fechaTransaccion!: string;
  cuentaTransaccion!: number;
  cuenta2Transaccion!: number;
  montoTransaccion!: number;
  categoriaTransaccion!: number;
  tipoTransaccion!: string;
  descripcionTransaccion!: string;

  constructor(private cdr: ChangeDetectorRef, private finanzasService: FinanzasServiceService) {
    Chart.register(...registerables);
    this.getCuentas();
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    initFlowbite();
    this.cdr.detectChanges();
  }

  obtenerPresupuestoYGastos() {
    this.finanzasService.getPresupuesto().subscribe(presupuestos => {
      this.presupuestoTotal = presupuestos.reduce((acc, curr) => acc + curr.Monto, 0);
      const categoriaIDsPresupuesto = presupuestos.map(p => p.CategoriaID);
      this.finanzasService.getGastosMes().subscribe(gastos => {
        const gastosFiltrados = gastos.filter(gasto => categoriaIDsPresupuesto.includes(gasto.CategoriaID));
        this.gastosPMes = gastosFiltrados.reduce((acc, curr) => acc + curr.Monto, 0);
        this.calcularCumplimientoPresupuesto();
      });
    });
  }

  calcularCumplimientoPresupuesto() {
    if (this.presupuestoTotal > 0) {
      this.cumplimientoPresupuesto = Math.round((this.gastosPMes / this.presupuestoTotal) * 100);
    } else {
      this.cumplimientoPresupuesto = 0;
    }
  }

  getCuentas() {
    // Usando forkJoin para manejar múltiples suscripciones de manera eficiente
    forkJoin({
      cuentas: this.finanzasService.getCuentas(),
      deudas: this.finanzasService.getDeudas(),
      gastos: this.finanzasService.getGastosMes(),
      categorias: this.finanzasService.getCategorias()
    }).pipe(
      tap(results => {
        // Procesando cuentas
        this.cuentas = results.cuentas;
        this.saldoActual = results.cuentas.reduce((acc, c) => acc + c.Saldo, 0);

        // Procesando deudas
        this.deudas = results.deudas.reduce((acc, c) => acc + c.MontoPendiente, 0);

        // Procesando gastos del mes
        this.gastosMes = results.gastos.reduce((acc, c) => acc + c.Monto, 0);

        // Procesando categorías
        this.categorias = results.categorias;

        // Llamada a función adicional después de recibir todos los datos
        this.obtenerPresupuestoYGastos();

        // Inicialización de componentes de la UI después de la carga de datos
        this.initUI();
      })
    ).subscribe();
  }

  initUI() {
    // Inicialización segura de Flowbite o cualquier otra biblioteca de UI
    initFlowbite();
  }


  actualizarModal(movimiento: string) {
    this.modal.movimiento = movimiento;
    this.categoriasSelected = this.categorias.filter(d => d.Tipo === movimiento);
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

  crearTransaccion() {
    if (!this.fechaTransaccion || !this.cuentaTransaccion || !this.montoTransaccion || (this.modal.movimiento !== 'Transferencia' ? !this.categoriaTransaccion : true) || !this.modal.movimiento || !this.descripcionTransaccion) {
      Swal.fire(
        'Debes Ingresar Todos los datos',
        `La transacción No ha sido creada.`,
        'error'
      )
      return
    }
    const data = {
      fecha: this.fechaTransaccion,
      cuentaID: this.cuentaTransaccion,
      monto: this.montoTransaccion,
      categoriaID: this.categoriaTransaccion,
      tipo: this.modal.movimiento,
      descripcion: this.descripcionTransaccion,
      cuentaOrigenID: this.cuentaTransaccion,
      cuentaDestinoID: this.cuenta2Transaccion
    }

    if (this.modal.movimiento === 'Transferencia') {
      if (!this.cuenta2Transaccion) {
        Swal.fire(
          'Debes Ingresar Todos los datos',
          `La transferencia No ha sido creada.`,
          'error'
        )
        return
      }
      this.finanzasService.createTransferencia(data).subscribe(data => {
        this.getCuentas();
        Swal.fire(
          'Transferencia Creada',
          `La transferencia ha sido creada exitosamente.`,
          'success'
        )
      })
    } else {
      this.finanzasService.createTransaccion(data).subscribe(data => {
        this.getCuentas();
        Swal.fire(
          'Transacción Creada',
          `La Transacción ha sido creada exitosamente.`,
          'success'
        )
      })
    }
  }

}
