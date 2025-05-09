import { Injectable, signal } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';
import { UserInfo } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public readonly user = signal<UserInfo | null>(null);
  public loaded = false;

  constructor(private oAuthService: OAuthService) {}

  async init(): Promise<void> {
    const token = this.oAuthService.getAccessToken();
    const response = await fetch(
      `${environment.portalUrl}/sharing/rest/community/self?f=json&token=${token}`,
    );
    const user = await response.json();
    this.user.set({
      email: user.email,
      givenName: user.firstName,
      name: user.fullName,
      picture: user.thumbnail
        ? `${environment.portalUrl}/sharing/rest/community/users/${user.username}/info/${user.thumbnail}`
        : undefined,
    });
    this.loaded = true;
  }

  clear(): void {
    this.user.set(null);
  }
}
