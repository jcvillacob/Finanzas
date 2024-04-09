import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-deudas',
  templateUrl: './resumen-deudas.component.html',
  styleUrls: ['./resumen-deudas.component.scss']
})
export class ResumenDeudasComponent {
  cuentas = [
    { nombre: 'Nequi', valor: '$1,500', icono: 'fa-solid fa-user' },
    { nombre: 'Davivienda', valor: '$4,200', icono: 'fa-solid fa-credit-card' },
    { nombre: 'Daviplata', valor: '$1,500', icono: 'fa-solid fa-user' },
    { nombre: 'Efectivo', valor: '$4,200', icono: 'fa-solid fa-building-columns' },
    { nombre: 'Bancolombia', valor: '$1,500', icono: 'fa-solid fa-graduation-cap' }
  ];
}
