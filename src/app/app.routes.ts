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
          import('./features/map/scenes/structure/structure.component').then(
            (m) => m.StructureSceneComponent,
          ),
        path: 'scene/structure',
      },
      {
        loadComponent: () =>
          import('./features/map/scenes/mva/mva.component').then(
            (m) => m.MVASceneComponent,
          ),
        path: 'scene/mva',
      },
      {
        loadComponent: () =>
          import('./features/map/scenes/wildland/wildland.component').then(
            (m) => m.WildlandSceneComponent,
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
