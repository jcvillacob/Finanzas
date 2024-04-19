import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-transacciones',
  templateUrl: './resumen-transacciones.component.html',
  styleUrls: ['./resumen-transacciones.component.scss']
})
export class ResumenTransaccionesComponent {
  transacciones: any[] = [];

  constructor(private finanzasServices: FinanzasServiceService) {
    this.finanzasServices.getTransaccionByUser().subscribe(data => {
      this.transacciones = data.reverse();
    });
  }
}
