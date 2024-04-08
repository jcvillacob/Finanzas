import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-cuentas',
  templateUrl: './resumen-cuentas.component.html',
  styleUrls: ['./resumen-cuentas.component.scss']
})
export class ResumenCuentasComponent {
  cuentas = [
    { nombre: 'Nequi', valor: '$1,500' },
    { nombre: 'Davivienda', valor: '$4,200' },
    { nombre: 'Daviplata', valor: '$1,500' },
    { nombre: 'Efectivo', valor: '$4,200' },
    { nombre: 'Bancolombia', valor: '$1,500' }
  ];
}
