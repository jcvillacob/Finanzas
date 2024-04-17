import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-gastos-recurrentes',
  templateUrl: './resumen-gastos-recurrentes.component.html',
  styleUrls: ['./resumen-gastos-recurrentes.component.scss']
})
export class ResumenGastosRecurrentesComponent {
  gastos: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.finanzasService.getRecurrentes().subscribe(data => {
      this.gastos = data;
    })
  }
}
