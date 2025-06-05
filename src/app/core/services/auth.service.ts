import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  getAuth,
  GoogleAuthProvider,
  onIdTokenChanged,
  signOut,
  signInWithPopup,
} from 'firebase/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();

  constructor(
    private userService: UserService,
    private router: Router,
  ) {
    onIdTokenChanged(this.auth, (user) => {
      this.userService.init(user);
      this.router.navigate(['/app']);
    });
  }

  public async login(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(this.auth, provider);
  }

  public async logout(): Promise<void> {
    await signOut(this.auth);
    this.router.navigate(['/']);
  }
}
