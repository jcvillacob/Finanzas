import { Component, OnInit } from '@angular/core';
import { FinanzasServiceService } from '../../../services/finanzas-service.service';
import { formatNumber } from '@angular/common';

@Component({
  selector: 'app-resumen-gastos',
  templateUrl: './resumen-gastos.component.html',
  styleUrls: ['./resumen-gastos.component.scss']
})
export class ResumenGastosComponent implements OnInit {
  categorias: any[] = [];

  constructor(private finanzasServices: FinanzasServiceService) { }


  ngOnInit() {
    this.obtenerCategoriasYGastos();
  }

  obtenerCategoriasYGastos() {
    this.finanzasServices.getCategorias().subscribe(categorias => {
      this.categorias = categorias.filter(c => c.Tipo === 'Gasto');

      this.finanzasServices.getGastosMes().subscribe(gastosMes => {
        this.categorias = this.categorias.map(categoria => {
          const montoTotal = gastosMes.filter(gasto => gasto.CategoriaID === categoria.CategoriaID)
            .reduce((sum, current) => sum + current.Monto, 0);
          return { ...categoria, Monto: montoTotal };
        });

        const montoMaximo = Math.max(...this.categorias.map(categoria => categoria.Monto));
        this.categorias = this.categorias.map(categoria => {
          const porcentajeI = (categoria.Monto / montoMaximo) * 100;
          const porcentaje = Math.round(porcentajeI);
          return { ...categoria, porcentaje: porcentaje };
        }).filter(c => c.porcentaje > 0).sort((a, b) => b.porcentaje - a.porcentaje);;
      });
    });
  }
}
