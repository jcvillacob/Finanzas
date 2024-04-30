import { Component, OnDestroy, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-resumen-presupuesto',
  templateUrl: './resumen-presupuesto.component.html',
  styleUrls: ['./resumen-presupuesto.component.scss']
})
export class ResumenPresupuestoComponent implements OnInit, OnDestroy {
  private updateSubscription!: Subscription;
  presupuestos: any[] = [];

  constructor(private finanzasService: FinanzasServiceService) {
    this.obtenerCategoriasYGastos();
   }

  ngOnInit() {
    this.updateSubscription = this.finanzasService.getUpdateNotifier().subscribe(() => {
      this.obtenerCategoriasYGastos();
    });
  }

  ngOnDestroy() {
    this.updateSubscription.unsubscribe();
  }

  obtenerCategoriasYGastos() {
    this.finanzasService.getPresupuesto().subscribe(categorias => {
      this.presupuestos = categorias;
      console.log(this.presupuestos);

      // Ahora obtenemos los gastos del mes
      this.finanzasService.getGastosMes().subscribe(gastosMes => {
        this.presupuestos = this.presupuestos.map(presupuesto => {
          // Calculamos la suma de los montos para cada categoria
          const montoTotal = gastosMes.filter(gasto => gasto.CategoriaID === presupuesto.CategoriaID)
            .reduce((sum, current) => sum + current.Monto, 0);
          // Añadimos el monto total a la categoria
          return { ...presupuesto, Gasto: montoTotal };
        });
        // Después de agregar el monto a cada categoría, calculamos el monto máximo
        const montoMaximo = Math.max(...this.presupuestos.map(presupuesto => presupuesto.Monto));
        // Opcionalmente, podrías querer calcular y añadir el porcentaje de cada categoría basado en el monto máximo
        this.presupuestos = this.presupuestos.map(presupuesto => {
          const porcentajeI = (presupuesto.Gasto / presupuesto.Monto) * 100;
          const porcentaje = Math.round(porcentajeI);
          return { ...presupuesto, porcentaje: porcentaje };
        });
      });
    });
  }
}
