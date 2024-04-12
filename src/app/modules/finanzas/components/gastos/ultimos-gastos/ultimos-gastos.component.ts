import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-ultimos-gastos',
  templateUrl: './ultimos-gastos.component.html',
  styleUrls: ['./ultimos-gastos.component.scss']
})
export class UltimosGastosComponent {
  transacciones: any = [];

  constructor(private finanzasServices: FinanzasServiceService) {
    this.finanzasServices.getTransaccionByUser().subscribe(data => {
      this.transacciones = data.filter(t => t.Tipo === 'Gasto');
    });
  }
}
