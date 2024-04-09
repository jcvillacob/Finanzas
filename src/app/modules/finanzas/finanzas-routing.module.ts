import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CuentasComponent } from './components/cuentas/cuentas.component';
import { GastosComponent } from './components/gastos/gastos.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'cuentas', component: CuentasComponent},
  {path: 'gastos', component: GastosComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FinanzasRoutingModule { }
