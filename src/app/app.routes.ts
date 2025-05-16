import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { loginRedirectGuard } from './core/guards/login-redirect.guard';
import { LoginComponent } from './features/auth/login.component';

export const routes: Routes = [
  {
    canActivate: [loginRedirectGuard],
    component: LoginComponent,
    path: '',
  },
  {
    canActivate: [authGuard],
    children: [
      {
        loadComponent: () =>
          import('./features/map/structure/map-structure.component').then(
            (m) => m.MapStructureComponent,
          ),
        path: 'scene/structure',
      },
      {
        loadComponent: () =>
          import('./features/map/mva/map-mva.component').then(
            (m) => m.MapMVAComponent,
          ),
        path: 'scene/mva',
      },
      {
        loadComponent: () =>
          import('./features/map/wildland/map-wildland.component').then(
            (m) => m.MapWildlandComponent,
          ),
        path: 'scene/wildland',
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'scene/structure',
      },
    ],
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainLayoutComponent),
    path: 'app',
  },
];
