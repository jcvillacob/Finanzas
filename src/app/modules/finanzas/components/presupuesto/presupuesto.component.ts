import { AfterViewInit, Component, OnInit } from '@angular/core';
import { initFlowbite } from 'flowbite';
import { FinanzasServiceService } from '../../services/finanzas-service.service';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.scss']
})
export class PresupuestoComponent implements AfterViewInit, OnInit {
  categorias: any[] = [];
  transacciones = [
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" },
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" },
    { TransaccionID: 11, CuentaID: 3, CategoriaID: 1, Tipo: "Gasto", Monto: 50000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En la tienda de la esquina" },
    { TransaccionID: 12, CuentaID: 3, CategoriaID: null, Tipo: "Transferencia", Monto: -10000, Fecha: "2024-04-05T15:00:00.000Z", Descripcion: "En el cajero de Colombia hacia Cuenta 4" },
  ];

  constructor(private finanzasServices: FinanzasServiceService) { }


  ngOnInit() {
    this.obtenerCategoriasYGastos();
  }

  ngAfterViewInit(): void {
    initFlowbite();
  }

  obtenerCategoriasYGastos() {
    this.finanzasServices.getPresupuesto().subscribe(categorias => {
      this.categorias = categorias;

      // Ahora obtenemos los gastos del mes
      this.finanzasServices.getGastosMes().subscribe(gastosMes => {
        for (let categoria of this.categorias) {
          categoria.transacciones = gastosMes.filter(g => g.CategoriaID === categoria.CategoriaID);
        }
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




editarPresupuesto() {

}

goBack() {
  window.history.back();
}
}
