import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-transacciones',
  templateUrl: './resumen-transacciones.component.html',
  styleUrls: ['./resumen-transacciones.component.scss']
})
export class ResumenTransaccionesComponent {
  transacciones = [
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Ingreso', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Ingreso', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Gasto', fecha: new Date(), cantidad: 75.88 },
    { nombre: 'Natasha Davi', tipo: 'Ingreso', fecha: new Date(), cantidad: 75.88 },
    // Más transacciones...
  ];
}
