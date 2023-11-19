import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {AuthSelectors} from "../../../../stores/auth/selectors/auth.selectors";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy{
  store = inject(Store);
  router = inject(Router);
  token$ = this.store.select(AuthSelectors.token);
  subscription = new Subscription();
  ngOnInit(): void {
    this.subscription.add(
        this.token$.subscribe(token => {
          if (!token) {
            this.router.navigate(['/login']).then();
          }
        })
    )
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
