import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-metas',
  templateUrl: './resumen-metas.component.html',
  styleUrls: ['./resumen-metas.component.scss']
})
export class ResumenMetasComponent {
  metas = [
    {nombre: 'Arriendo', cumplimiento: 100, monto: 150000},
    {nombre: 'Transporte', cumplimiento: 80, monto: 150000},
    {nombre: 'Comida', cumplimiento: 20, monto: 150000},
    {nombre: 'Mecatos', cumplimiento: 50, monto: 150000}
  ]
}
