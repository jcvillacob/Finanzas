import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-transacciones',
  templateUrl: './resumen-transacciones.component.html',
  styleUrls: ['./resumen-transacciones.component.scss']
})
export class ResumenTransaccionesComponent {
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
      NombreCategoria: 'Transporte de carga',
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
}
