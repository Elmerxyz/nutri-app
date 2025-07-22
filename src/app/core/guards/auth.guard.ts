import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { AuthService } from '../services/auth-services/auth.service';

const authService = () => inject(AuthService);
const routerInjection = () => inject(Router);

export const ProtectedGuard: CanActivateFn = async (route, state) => {
  const router = routerInjection();
  const data = await firstValueFrom(authService().session());
  if (!data) {
    router.navigateByUrl('/auth/log-in');
    return false;
  }
  return true;
};

export const AuthGuard: CanActivateFn = async () => {
  const router = routerInjection();
  const data = await firstValueFrom(authService().session());
  if (data) {
    router.navigateByUrl('/nutri');
    return false;
  }
  return true;
};
