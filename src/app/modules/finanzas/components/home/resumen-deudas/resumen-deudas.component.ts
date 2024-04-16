import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-deudas',
  templateUrl: './resumen-deudas.component.html',
  styleUrls: ['./resumen-deudas.component.scss']
})
export class ResumenDeudasComponent {
  deudas: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.finanzasService.getDeudas().subscribe(data => {
      this.deudas = data.filter(m => m.MontoPendiente > 0);
    });
  }


}
