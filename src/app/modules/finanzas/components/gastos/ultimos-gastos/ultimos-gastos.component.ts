import { Component } from '@angular/core';

@Component({
  selector: 'app-ultimos-gastos',
  templateUrl: './ultimos-gastos.component.html',
  styleUrls: ['./ultimos-gastos.component.scss']
})
export class UltimosGastosComponent {
  transacciones = [
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    // Más transacciones...
  ];
}
