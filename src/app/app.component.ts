import {Component, inject, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./shared/common-ui/header/header.component";
import {SidebarComponent} from "./shared/common-ui/sidebar/sidebar.component";
import {ToastModule} from "primeng/toast";
import {Store} from "@ngrx/store";
import {AuthSelectors} from "./stores/auth/selectors/auth.selectors";
import {Subscription} from "rxjs";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        SidebarComponent,
        ToastModule
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit, OnDestroy {

    title = 'admin-panel';
    renderer = inject(Renderer2);
    store = inject(Store);
    token$ = this.store.select(AuthSelectors.token);
    isAuthenticated = false;
    subscription = new Subscription();
    ngOnInit(): void {
        this.subscription.add(
            this.token$.subscribe(token => {
                this.isAuthenticated = token !== undefined;
            })
        );
        this.renderer.addClass(document.body, 'dark');
        this.renderer.addClass(document.body, 'ltr');
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
