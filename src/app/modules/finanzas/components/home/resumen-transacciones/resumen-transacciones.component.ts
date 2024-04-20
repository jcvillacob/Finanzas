import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-transacciones',
  templateUrl: './resumen-transacciones.component.html',
  styleUrls: ['./resumen-transacciones.component.scss']
})
export class ResumenTransaccionesComponent implements OnInit, OnDestroy {
  private updateSubscription!: Subscription;
  transacciones: any[] = [];

  constructor(private finanzasServices: FinanzasServiceService) {
    this.getTransacciones();
  }

  getTransacciones(){
    this.finanzasServices.getTransaccionByUser().subscribe(data => {
      this.transacciones = data.reverse().slice(0, 10);
    });
  }

  ngOnInit() {
    this.updateSubscription = this.finanzasServices.getUpdateNotifier().subscribe(() => {
      this.getTransacciones();
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }
}
