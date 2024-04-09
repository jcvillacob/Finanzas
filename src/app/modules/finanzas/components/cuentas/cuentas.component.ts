import { AfterViewInit, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.component.html',
  styleUrls: ['./cuentas.component.scss']
})
export class CuentasComponent implements AfterViewInit {
  cuentaSeleccionada = '';
  cuentas = [
    { Nombre: 'Nequi', Saldo: '$1,500', Icono: 'fa-solid fa-mobile-screen', Tipo: 'Ahorros' },
    { Nombre: 'Davivienda', Saldo: '$4,200', Icono: 'fa-solid fa-building-columns', Tipo: 'Ahorros' },
    { Nombre: 'Daviplata', Saldo: '$1,500', Icono: 'fa-solid fa-mobile-screen', Tipo: 'Ahorros' },
    { Nombre: 'Efectivo', Saldo: '$4,200', Icono: 'fa-solid fa-wallet', Tipo: 'Ahorros' },
    { Nombre: 'Bancolombia', Saldo: '$1,500', Icono: 'fa-solid fa-building-columns', Tipo: 'Ahorros' }
  ];
  transacciones = [
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" }
  ];

  ngAfterViewInit(): void {
    initFlowbite();
  }

  seleccionarCuenta(nombre: string) {
    this.cuentaSeleccionada = nombre;
  }

  agregarCuenta() {
    // Puedes adaptar esta función para abrir un modal donde el usuario pueda introducir los datos de la nueva cuenta.
    const nuevaCuenta = { Nombre: 'Nueva Cuenta', Saldo: '$0', Icono: 'fa-solid fa-piggy-bank', Tipo: 'Ahorros' };
    this.cuentas.push(nuevaCuenta);
  }

  eliminarCuenta(index: number) {
    this.cuentas.splice(index, 1);
  }

  goBack() {
    window.history.back();
  }
}
