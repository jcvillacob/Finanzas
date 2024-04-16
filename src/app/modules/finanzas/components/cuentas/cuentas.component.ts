import { AfterViewInit, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FinanzasServiceService } from '../../services/finanzas-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements AfterViewInit {
  cuentaSeleccionada = '';
  nombre!: string;
  tipo!: string;
  icono!: string;
  saldo!: number;
  cuentas!: any[];
  transacciones = [
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" }
  ];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getCuentas();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      initFlowbite();
    }, 500)
  }

  getCuentas() {
    this.finanzasService.getCuentas().subscribe(data => {
      this.cuentas = data;
      this.nombre = '';
      this.tipo = '';
      this.icono = '';
      this.saldo = 0;
      setTimeout(() => {
        initFlowbite();
      }, 500);
    })
  }

  seleccionarCuenta(nombre: string, cuentaId: number) {
    this.cuentaSeleccionada = nombre;
    this.getTransaccionesByCuenta(cuentaId);
  }

  agregarCuenta() {
    let data = {
      usuarioID: 1,
      nombre: this.nombre,
      icono: this.icono,
      saldo: this.saldo,
      tipo: this.tipo
    }
    this.finanzasService.createCuenta(data).subscribe(data => {
      this.getCuentas();
    })
  }

  eliminarCuenta(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esto eliminará la cuenta',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Si el usuario confirma, procede con la eliminacion
        this.finanzasService.deleteCuenta(id).subscribe(data => {
          this.getCuentas();
        }, (err) => {
          Swal.fire(
            'Cuenta NO Eliminada',
            'La cuenta no ha podido ser eliminada.',
            'warning'
          )
        })
        Swal.fire(
          'Cuenta Eliminada',
          'La cuenta ha sido eliminada exitosamente.',
          'success'
        )
      }
    });

  }


  getTransaccionesByCuenta(id: number) {
    this.finanzasService.getTransaccionByCuenta(id).subscribe(data => {
      this.transacciones = data;
    });
  }

  goBack() {
    window.history.back();
  }
}
