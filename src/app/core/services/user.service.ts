import { Injectable, signal } from '@angular/core';
import { UserInfo } from 'firebase/auth';

@Injectable({ providedIn: 'root' })
export class UserService {
  public readonly user = signal<UserInfo | null>(null);
  public loaded = false;

  public init(user: UserInfo | null): void {
    if (user) {
      this.user.set({
        displayName: user?.displayName,
        email: user?.email,
        phoneNumber: user?.phoneNumber,
        photoURL: user?.photoURL,
        providerId: user?.providerId,
        uid: user?.uid,
      });
    } else {
      this.user.set(null);
    }
    this.loaded = true;
  }

  public clear(): void {
    this.user.set(null);
  }
}
