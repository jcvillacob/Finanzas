import { Component } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss']
})
export class TransaccionesComponent {
  transacciones = [
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Ingreso', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Ingreso', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Ingreso', fecha: new Date(), cantidad: 75.88 },
  ];


  goBack() {
    window.history.back();
  }
}
