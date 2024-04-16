import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-metas',
  templateUrl: './resumen-metas.component.html',
  styleUrls: ['./resumen-metas.component.scss']
})
export class ResumenMetasComponent {
  metas: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.finanzasService.getMetas().subscribe(data => {
      this.metas = data;
    });
  }


}
