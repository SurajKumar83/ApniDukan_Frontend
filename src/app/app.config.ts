import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withRouterConfig, ExtraOptions } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const extraOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled', // Restore scroll position
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withRouterConfig(extraOptions)),
    provideAnimationsAsync(),
  ],
};
