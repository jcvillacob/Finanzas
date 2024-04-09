import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanzasRoutingModule } from './finanzas-routing.module';

import { ResumenCuentasComponent } from './components/home/resumen-cuentas/resumen-cuentas.component';
import { HomeComponent } from '../finanzas/components/home/home.component';
import { ResumenCategoriasComponent } from './components/home/resumen-categorias/resumen-categorias.component';
import { ResumenDeudasComponent } from './components/home/resumen-deudas/resumen-deudas.component';
import { ResumenGastosRecurrentesComponent } from './components/home/resumen-gastos-recurrentes/resumen-gastos-recurrentes.component';
import { ResumenMetasComponent } from './components/home/resumen-metas/resumen-metas.component';
import { ResumenPresupuestoComponent } from './components/home/resumen-presupuesto/resumen-presupuesto.component';
import { ResumenTransaccionesComponent } from './components/home/resumen-transacciones/resumen-transacciones.component';
import { ResumenSaldoComponent } from './components/home/resumen-saldo/resumen-saldo.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { GastosDiariosComponent } from './components/gastos/gastos-diarios/gastos-diarios.component';
import { UltimosGastosComponent } from './components/gastos/ultimos-gastos/ultimos-gastos.component';
import { ResumenGastosComponent } from './components/gastos/resumen-gastos/resumen-gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';


@NgModule({
  declarations: [
    HomeComponent,
    ResumenCuentasComponent,
    ResumenCategoriasComponent,
    ResumenDeudasComponent,
    ResumenGastosRecurrentesComponent,
    ResumenMetasComponent,
    ResumenPresupuestoComponent,
    ResumenTransaccionesComponent,
    ResumenSaldoComponent,
    CuentasComponent,
    GastosComponent,
    GastosDiariosComponent,
    UltimosGastosComponent,
    ResumenGastosComponent,
    PresupuestoComponent,
    TransaccionesComponent
  ],
  imports: [
    CommonModule,
    FinanzasRoutingModule
  ]
})
export class FinanzasModule { }
