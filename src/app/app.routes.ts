import {Routes} from '@angular/router';
import {provideEffects} from "@ngrx/effects";
import {AuthEffects} from "./stores/auth/effects/auth.effects";
import {provideState} from "@ngrx/store";
import {authReducer} from "./stores/auth/reducers/auth.reducers";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/dashboard/components/dashboard/dashboard.component').then(cmp => cmp.DashboardComponent),
    providers: [
      provideState('auth', authReducer),
      provideEffects(AuthEffects)
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./features/auth/components/login/login.component').then(cmp => cmp.LoginComponent),
    providers: [
      provideState('auth', authReducer),
      provideEffects(AuthEffects)
    ]
  }
];
