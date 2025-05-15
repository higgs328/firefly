import { bootstrapApplication } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { authConfig } from './app/core/configs/auth.config';

initializeApp(authConfig);

bootstrapApplication(AppComponent, appConfig).catch(
  (err) => console.error(err), // eslint-disable-line
);
