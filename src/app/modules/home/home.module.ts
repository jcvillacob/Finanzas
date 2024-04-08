import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { ResumenCuentasComponent } from './components/resumen-cuentas/resumen-cuentas.component';
import { HomeComponent } from './components/home/home.component';
import { ResumenCategoriasComponent } from './components/resumen-categorias/resumen-categorias.component';
import { ResumenDeudasComponent } from './components/resumen-deudas/resumen-deudas.component';
import { ResumenGastosRecurrentesComponent } from './components/resumen-gastos-recurrentes/resumen-gastos-recurrentes.component';


@NgModule({
  declarations: [
    HomeComponent,
    ResumenCuentasComponent,
    ResumenCategoriasComponent,
    ResumenDeudasComponent,
    ResumenGastosRecurrentesComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
