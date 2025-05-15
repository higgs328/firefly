import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { getAuth, onAuthStateChanged, onIdTokenChanged } from 'firebase/auth';

export const authGuard: CanActivateFn = async () => {
  const router = inject(Router);
  const auth = getAuth();
  console.log(auth);
  const user = await new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => {
      console.log("authGuard.onAuthStateChanged", user);
      resolve(user);
    });
    onIdTokenChanged(auth, (user) => {
      console.log("authGuard.onIdTokenChanged", user);
      resolve(user);
    });
});
  console.log("authGuard", user);
  return user ? true : router.createUrlTree(['/']);
};
