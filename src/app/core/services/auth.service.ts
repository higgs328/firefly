import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import IdentityManager from '@arcgis/core/identity/IdentityManager';
import ServerInfo from '@arcgis/core/identity/ServerInfo';
import { OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';
import { authConfig } from '../configs/auth.config';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private oAuthService: OAuthService,
    private userService: UserService,
    private router: Router,
  ) {
    this.oAuthService.configure(authConfig);
    this.oAuthService
      .tryLogin({ customHashFragment: window.location.hash })
      .then(() => {
        if (this.oAuthService.hasValidAccessToken()) {
          this.registerTokenWithEsri();
          this.userService.init();
        }
      });
  }

  login(): void {
    this.oAuthService.initLoginFlow();
  }

  logout(): void {
    this.oAuthService.logOut();
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  private registerTokenWithEsri(): void {
    const token = this.oAuthService.getAccessToken();
    const expires = this.oAuthService.getAccessTokenExpiration();
    if (!token && !expires) return;

    const serverInfo = new ServerInfo({
      server: environment.portalUrl,
      tokenServiceUrl: `${environment.portalUrl}/sharing/rest/oauth2/token`,
    });

    IdentityManager.registerServers([serverInfo]);
    IdentityManager.registerToken({
      expires,
      server: environment.portalUrl,
      token,
    });
  }
}
