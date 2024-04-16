import { inject } from '@angular/core';
import { CanActivateFn, RouterStateSnapshot, ActivatedRouteSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';

export const loginGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {
  const authService = inject(AuthService);
  const router = inject(Router);

  return authService.isLoggedIn$.pipe(
    map(isLoggedIn => {
      if(route.url[0].path === 'login' && isLoggedIn) {
        return router.createUrlTree(['/finanzas']);
      } else if (route.url[0].path === 'login' && !isLoggedIn) {
        return true
      }

      if (isLoggedIn) {
        return true
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};
