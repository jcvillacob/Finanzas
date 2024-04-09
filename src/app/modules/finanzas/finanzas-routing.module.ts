import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { GastosComponent } from './components/gastos/gastos.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: 'gastos', component: GastosComponent},
  {path: 'presupuesto', component: PresupuestoComponent},
  {path: 'transacciones', component: TransaccionesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzasRoutingModule { }
