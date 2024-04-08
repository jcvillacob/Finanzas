import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-deudas',
  templateUrl: './resumen-deudas.component.html',
  styleUrls: ['./resumen-deudas.component.scss']
})
export class ResumenDeudasComponent {
  cuentas = [
    { nombre: 'Nequi', valor: '$1,500' },
    { nombre: 'Davivienda', valor: '$4,200' },
    { nombre: 'Daviplata', valor: '$1,500' },
    { nombre: 'Efectivo', valor: '$4,200' },
    { nombre: 'Bancolombia', valor: '$1,500' }
  ];
}
