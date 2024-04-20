import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-gastos-recurrentes',
  templateUrl: './resumen-gastos-recurrentes.component.html',
  styleUrls: ['./resumen-gastos-recurrentes.component.scss']
})
export class ResumenGastosRecurrentesComponent implements OnInit, OnDestroy {
  private updateSubscription!: Subscription;
  gastos: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getSuscripciones();
  }

  ngOnInit() {
    this.updateSubscription = this.finanzasService.getUpdateNotifier().subscribe(() => {
      this.getSuscripciones();
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  getSuscripciones() {
    this.finanzasService.getRecurrentes().subscribe(data => {
      this.gastos = data;
    })
  }
}
