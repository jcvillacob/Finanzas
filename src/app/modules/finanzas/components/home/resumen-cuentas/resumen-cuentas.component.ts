import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-cuentas',
  templateUrl: './resumen-cuentas.component.html',
  styleUrls: ['./resumen-cuentas.component.scss']
})
export class ResumenCuentasComponent {
  cuentas!: any[];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getCuentas();
  }

  getCuentas() {
    this.finanzasService.getCuentas().subscribe(data => {
      this.cuentas = data;
    })
  }
}
