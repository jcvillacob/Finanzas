import { Component } from '@angular/core';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.scss'],
})
export class TransaccionesComponent {
  transacciones = [
    {
      TransaccionID: 11,
      CuentaID: 3,
      CategoriaID: 1,
      Tipo: 'Gasto',
      Monto: 50000,
      Fecha: '2024-04-05T15:00:00.000Z',
      Descripcion: 'En la tienda de la esquina',
      NombreCuenta: 'Davivienda',
      IconoCuenta: 'fa-solid fa-building-columns',
      NombreCategoria: 'Arriendo',
      IconoCategoria: 'fa-solid fa-van-shuttle'
    },
    {
      TransaccionID: 11,
      CuentaID: 3,
      CategoriaID: 1,
      Tipo: 'Gasto',
      Monto: 50000,
      Fecha: '2024-04-05T15:00:00.000Z',
      Descripcion: 'En la tienda de la esquina',
      NombreCuenta: 'Davivienda',
      IconoCuenta: 'fa-solid fa-building-columns',
      NombreCategoria: 'Arriendo',
      IconoCategoria: 'fa-solid fa-van-shuttle'
    },
    {
      TransaccionID: 11,
      CuentaID: 3,
      CategoriaID: 1,
      Tipo: 'Gasto',
      Monto: 50000,
      Fecha: '2024-04-05T15:00:00.000Z',
      Descripcion: 'En la tienda de la esquina',
      NombreCuenta: 'Davivienda',
      IconoCuenta: 'fa-solid fa-building-columns',
      NombreCategoria: 'Arriendo',
      IconoCategoria: 'fa-solid fa-van-shuttle'
    }
  ];

  goBack() {
    window.history.back();
  }
}
