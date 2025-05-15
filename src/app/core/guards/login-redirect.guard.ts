import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onIdTokenChanged } from 'firebase/auth';

export const loginRedirectGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const auth = getAuth();
  const user = await new Promise((resolve) => {
    const unsubscribe = onIdTokenChanged(auth, (user) => {
      unsubscribe();
      resolve(user);
    });
  });
  return user ? router.createUrlTree(['/app']) : true;
};
