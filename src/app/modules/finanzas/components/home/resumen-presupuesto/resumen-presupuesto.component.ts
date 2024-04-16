import { Component } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';

@Component({
  selector: 'app-resumen-presupuesto',
  templateUrl: './resumen-presupuesto.component.html',
  styleUrls: ['./resumen-presupuesto.component.scss']
})
export class ResumenPresupuestoComponent {
  categorias: any[] = [];

  constructor(private finanzasServices: FinanzasServiceService) { }


  ngOnInit() {
    this.obtenerCategoriasYGastos();
  }

  obtenerCategoriasYGastos() {
    this.finanzasServices.getPresupuesto().subscribe(categorias => {
      this.categorias = categorias;

      // Ahora obtenemos los gastos del mes
      this.finanzasServices.getGastosMes().subscribe(gastosMes => {
        this.categorias = this.categorias.map(categoria => {
          // Calculamos la suma de los montos para cada categoria
          const montoTotal = gastosMes.filter(gasto => gasto.CategoriaID === categoria.CategoriaID)
            .reduce((sum, current) => sum + current.Monto, 0);
          // Añadimos el monto total a la categoria
          return { ...categoria, Gasto: montoTotal };
        });
        // Después de agregar el monto a cada categoría, calculamos el monto máximo
        const montoMaximo = Math.max(...this.categorias.map(categoria => categoria.Monto));
        // Opcionalmente, podrías querer calcular y añadir el porcentaje de cada categoría basado en el monto máximo
        this.categorias = this.categorias.map(categoria => {
          const porcentajeI = (categoria.Gasto / categoria.Monto) * 100;
          const porcentaje = Math.round(porcentajeI);
          return { ...categoria, porcentaje: porcentaje };
        });
        console.log(this.categorias);
      });
    });
  }
}
