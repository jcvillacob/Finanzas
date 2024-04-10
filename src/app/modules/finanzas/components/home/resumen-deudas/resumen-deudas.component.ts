import { Component } from '@angular/core';

@Component({
  selector: 'app-resumen-deudas',
  templateUrl: './resumen-deudas.component.html',
  styleUrls: ['./resumen-deudas.component.scss']
})
export class ResumenDeudasComponent {
  deudas = [
    {
      "DeudaID": 1,
      "Nombre": "Tio de JD",
      "Icono": 'fa-solid fa-user',
      "MontoTotal": 1100000,
      "MontoPendiente": 10000
    },
    {
      "DeudaID": 3,
      "Nombre": "Bancolombia",
      "Icono": 'fa-solid fa-credit-card',
      "MontoTotal": 100000,
      "MontoPendiente": 50000
    },
    {
      "DeudaID": 2,
      "Nombre": "ICETEX",
      "Icono": 'fa-solid fa-graduation-cap',
      "MontoTotal": 1100000,
      "MontoPendiente": 350000
    },
  ];
}
