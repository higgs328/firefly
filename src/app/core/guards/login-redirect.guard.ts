import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';

export const loginRedirectGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const auth = getAuth();
  console.log(auth);
  const user = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      console.log("loginRedirectGuard.onAuthStateChanged", user);
      resolve(user);
    });
    onIdTokenChanged(auth, (user) => {
      console.log("loginRedirectGuard.onIdTokenChanged", user);
      resolve(user);
    });
});
  console.log("loginRedirectGuard", user);
  return user ? router.createUrlTree(['/app']) : true;
};
