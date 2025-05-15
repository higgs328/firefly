import { Injectable } from '@angular/core';
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  onIdTokenChanged,
  signOut,
  signInWithRedirect,
} from 'firebase/auth';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private auth = getAuth();

  constructor(private userService: UserService) {
    onAuthStateChanged(this.auth, (user) => {
      userService.init(user);
    });
    onIdTokenChanged(this.auth, (user) => {
      userService.init(user);
    });
  }

  async login(): Promise<void> {
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(this.auth, provider);
  }

  async logout(): Promise<void> {
    await signOut(this.auth);
  }
}
