import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-deudas',
  templateUrl: './resumen-deudas.component.html',
  styleUrls: ['./resumen-deudas.component.scss']
})
export class ResumenDeudasComponent implements OnInit, OnDestroy {
  private updateSubscription!: Subscription;
  deudas: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getDeudas();
  }

  ngOnInit() {
    this.updateSubscription = this.finanzasService.getUpdateNotifier().subscribe(() => {
      this.getDeudas();
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  getDeudas() {
    this.finanzasService.getDeudas().subscribe(data => {
      this.deudas = data.filter(m => m.MontoPendiente > 0);
    });
  }
}
