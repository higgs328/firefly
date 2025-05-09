import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../../../environments/environment';

export const authConfig: AuthConfig = {
  clientId: '1d6dJXBxXi9poPCL',
  loginUrl: 'https://dsny.maps.arcgis.com/sharing/rest/oauth2/authorize',
  oidc: false,
  redirectUri: environment.appUrl,
  requireHttps: false,
  responseType: 'token',
  scope: 'portal:read:users',
  strictDiscoveryDocumentValidation: false,
  tokenEndpoint: 'https://dsny.maps.arcgis.com/sharing/rest/oauth2/token',
};
