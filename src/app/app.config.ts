import {ApplicationConfig, importProvidersFrom, isDevMode} from '@angular/core';
import {provideRouter, withEnabledBlockingInitialNavigation} from '@angular/router';

import {routes} from './app.routes';
import {provideStoreDevtools} from "@ngrx/store-devtools";
import {provideStore} from "@ngrx/store";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const appConfig: ApplicationConfig = {
  providers: [
      MessageService,
      importProvidersFrom([BrowserAnimationsModule]),
      provideStore(),
      provideStoreDevtools({
        maxAge: 25,
        logOnly: !isDevMode(),
      }),
      provideRouter(routes, withEnabledBlockingInitialNavigation()),
  ]
};
