import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-presupuesto',
  templateUrl: './resumen-presupuesto.component.html',
  styleUrls: ['./resumen-presupuesto.component.scss']
})
export class ResumenPresupuestoComponent {
  presupuesto = [
    {categoria: 'Arriendo', cumplimiento: 100, monto: 150000},
    {categoria: 'Transporte', cumplimiento: 80, monto: 150000},
    {categoria: 'Comida', cumplimiento: 20, monto: 150000},
    {categoria: 'Mecatos', cumplimiento: 50, monto: 150000}
  ]

}
