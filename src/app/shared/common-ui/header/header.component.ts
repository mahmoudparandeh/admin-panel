import {Component, inject, Renderer2} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {faBars, faBell, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {InputSwitchModule} from "primeng/inputswitch";
import {FormsModule} from "@angular/forms";
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FaIconComponent, InputSwitchModule, FormsModule, NgOptimizedImage],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
 faSun = faSun;
 faMoon = faMoon;
 faBell = faBell;
 faBars = faBars;
 darkMode = true;
 renderer = inject(Renderer2);

  setTheme(): void {
    this.renderer.removeClass(document.body, this.darkMode ? 'light': 'dark');
    this.renderer.addClass(document.body, this.darkMode ? 'dark': 'light');
  }
}
