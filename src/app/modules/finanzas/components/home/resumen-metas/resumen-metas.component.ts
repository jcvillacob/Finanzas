import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-metas',
  templateUrl: './resumen-metas.component.html',
  styleUrls: ['./resumen-metas.component.scss']
})
export class ResumenMetasComponent implements OnInit, OnDestroy {
  private updateSubscription!: Subscription;
  metas: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.getMetas();
  }

  ngOnInit() {
    this.updateSubscription = this.finanzasService.getUpdateNotifier().subscribe(() => {
      this.getMetas();
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  getMetas() {
    this.finanzasService.getMetas().subscribe(data => {
      this.metas = data.filter(m => m.MontoAhorrado < m.MontoObjetivo);
    });
  }
}
