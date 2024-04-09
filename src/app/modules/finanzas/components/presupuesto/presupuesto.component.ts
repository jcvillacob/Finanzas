import { AfterViewInit, Component } from '@angular/core';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements AfterViewInit {
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
  ];
  transacciones = [
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" },
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" },
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" },
  ];

  ngAfterViewInit(): void {
      initFlowbite();
  }

  editarPresupuesto() {
    
  }

  goBack() {
    window.history.back();
  }
}
