import {inject, Injectable} from '@angular/core';
import {LoginDto} from "../../models/auth/login.dto";
import {Observable, of, throwError} from "rxjs";
import {UserModel} from "../../models/auth/user.model";
import {ToastService} from "../toast/toast.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  toastService = inject(ToastService);
  login(data: LoginDto): Observable<UserModel & {token: string}> {
    if(data.username === 'mahmudit88' && data.password === '12345678') {
      return of({
        email: 'mahmudit88@gmail.com',
        username: 'mahmudit88',
        fullName: 'Mahmoud Parandeh',
        phone: '+989358104719',
        token: 'dahgwEQWRSAJFsklfjw232'
      })
    } else {
      this.toastService.showError('Username or password is incorrect');
      return throwError('Username or password is incorrect');
    }
  }
}
