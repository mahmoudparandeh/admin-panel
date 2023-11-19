import {Actions, createEffect, ofType} from "@ngrx/effects";
import {inject, Injectable} from "@angular/core";
import {AuthActions} from "../actions/auth.actions";
import {catchError, exhaustMap, map, tap} from "rxjs";
import {AuthService} from "../../../services/auth/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class AuthEffects {
    router = inject(Router);
    $login =  createEffect(() => {
      return this.actions$.pipe(
          ofType(AuthActions.loginUser),
          exhaustMap(action => {
                  return this.authService.login(action.data).pipe(
                      map(user => {
                          const userData: any = {...user};
                          delete userData.token;
                          return AuthActions.loginUserSuccess({user: userData, token: user.token})}),
                      tap(response => {
                          localStorage.setItem('accessToken', response.token);
                          this.router.navigate(['']).then();
                      }),
                      catchError(async (error) => AuthActions.loginUserFailure({error}))
                  )
              }
          ),
      )
    } );
    constructor(private actions$: Actions, private authService: AuthService) {}
}

