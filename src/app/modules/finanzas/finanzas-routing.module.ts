import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';
import { DeudasComponent } from './components/deudas/deudas.component';
import { RecurrentesComponent } from './components/recurrentes/recurrentes.component';
import { MetasComponent } from './components/metas/metas.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: 'gastos', component: GastosComponent},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'transacciones', component: TransaccionesComponent},
  {path: 'deudas', component: DeudasComponent},
  {path: 'recurrentes', component: RecurrentesComponent},
  {path: 'metas', component: MetasComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzasRoutingModule { }
