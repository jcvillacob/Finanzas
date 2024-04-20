import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-cuentas',
  templateUrl: './resumen-cuentas.component.html',
  styleUrls: ['./resumen-cuentas.component.scss']
})
export class ResumenCuentasComponent implements OnInit, OnDestroy {
  private updateSubscription!: Subscription;
  cuentas: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getCuentas();
  }

  ngOnInit() {
    this.updateSubscription = this.finanzasService.getUpdateNotifier().subscribe(() => {
      this.getCuentas();
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  getCuentas() {
    this.finanzasService.getCuentas().subscribe(data => {
      this.cuentas = data;
    })
  }
}
