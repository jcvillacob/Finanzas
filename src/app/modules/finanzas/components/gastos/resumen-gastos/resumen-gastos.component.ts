import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-gastos',
  templateUrl: './resumen-gastos.component.html',
  styleUrls: ['./resumen-gastos.component.scss']
})
export class ResumenGastosComponent {
  categorias = [
    {
      "CategoriaID": 1,
      "Nombre": "Arriendo",
      "Tipo": "Gasto",
      "Icono": "fa-solid fa-house",
      "Color": 'rgb(255, 99, 132)',
      "Monto": 250000
    },
    {
      "CategoriaID": 1,
      "Nombre": "Transporte",
      "Tipo": "Gasto",
      "Icono": "fa-solid fa-van-shuttle",
      "Color": 'rgb(54, 162, 235)',
      "Monto": 150000
    },
    {
      "CategoriaID": 1,
      "Nombre": "Arriendo",
      "Tipo": "Gasto",
      "Icono": "fa-solid fa-house",
      "Color": 'rgb(255, 205, 86)',
      "Monto": 10000
    },
    {
      "CategoriaID": 1,
      "Nombre": "Arriendo",
      "Tipo": "Gasto",
      "Icono": "fa-solid fa-house",
      "Color": 'rgb(75, 192, 192)',
      "Monto": 180000
    },
  ]



}
