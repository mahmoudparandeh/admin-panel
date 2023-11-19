import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormControl, ReactiveFormsModule, Validators} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {PasswordModule} from "primeng/password";
import {ButtonModule} from "primeng/button";
import {Store} from "@ngrx/store";
import {AuthActions} from "../../../../stores/auth/actions/auth.actions";
import {AuthSelectors} from "../../../../stores/auth/selectors/auth.selectors";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fb = inject(FormBuilder);
  loginForm = this.fb.group({
    username: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    }),
    password: new FormControl<string>('', {
      nonNullable: true,
      validators: Validators.required
    })
  });
  store = inject(Store);
  loading$ = this.store.select(AuthSelectors.loading);


  login(): void {
    this.store.dispatch(AuthActions.loginUser({data: this.loginForm.getRawValue()}))
  }
}
