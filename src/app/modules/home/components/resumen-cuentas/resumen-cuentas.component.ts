import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-cuentas',
  templateUrl: './resumen-cuentas.component.html',
  styleUrls: ['./resumen-cuentas.component.scss']
})
export class ResumenCuentasComponent {
  cuentas = [
    { nombre: 'Nequi', valor: '$1,500', icono: 'fa-solid fa-mobile-screen' },
    { nombre: 'Davivienda', valor: '$4,200', icono: 'fa-solid fa-building-columns' },
    { nombre: 'Daviplata', valor: '$1,500', icono: 'fa-solid fa-mobile-screen' },
    { nombre: 'Efectivo', valor: '$4,200', icono: 'fa-solid fa-wallet' },
    { nombre: 'Bancolombia', valor: '$1,500', icono: 'fa-solid fa-building-columns' }
  ];
}
