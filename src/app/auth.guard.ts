import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) :
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const router = inject(Router);
  const authService = inject(AuthService);

  return canActivate(route, state);

  function canActivate(
    _route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const url: string = state.url;
    return checkLogin(url);
  }

  function checkLogin(url: string): boolean {
    if (authService.isLoggedIn) {
      return true;
    }
    authService.redirectUrl = url;
    router.navigate(['/login']);

    return false;
  }
};
