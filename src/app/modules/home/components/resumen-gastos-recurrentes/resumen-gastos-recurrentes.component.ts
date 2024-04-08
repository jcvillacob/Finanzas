import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-gastos-recurrentes',
  templateUrl: './resumen-gastos-recurrentes.component.html',
  styleUrls: ['./resumen-gastos-recurrentes.component.scss']
})
export class ResumenGastosRecurrentesComponent {
  cuentas = [
    { nombre: 'Nequi', valor: '$1,500' },
    { nombre: 'Davivienda', valor: '$4,200' },
    { nombre: 'Daviplata', valor: '$1,500' },
    { nombre: 'Efectivo', valor: '$4,200' },
    { nombre: 'Bancolombia', valor: '$1,500' }
  ];
}
