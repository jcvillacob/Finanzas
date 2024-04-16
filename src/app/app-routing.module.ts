import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/authentication/login/login.component';
import { loginGuard } from './core/authentication/login.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'finanzas' },
  { path: 'login', pathMatch: 'full', component: LoginComponent, canActivate: [loginGuard] },
  {
    path: 'home',
    loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule),
    canActivate: [loginGuard]
  },
  {
    path: 'finanzas',
    loadChildren: () => import('./modules/finanzas/finanzas.module').then(m => m.FinanzasModule),
    canActivate: [loginGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
