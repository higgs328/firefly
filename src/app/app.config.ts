import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideMapboxGL } from 'ngx-mapbox-gl';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideMapboxGL({
      accessToken:
        'pk.eyJ1IjoicmhpZ2dpbnMtY3ZmZCIsImEiOiJja2kxdjlzZmMxZTVpMnhvZHNmNXZsdDFpIn0.ta6054evoS8aIkY4hpSLeQ',
    }),
  ],
};
