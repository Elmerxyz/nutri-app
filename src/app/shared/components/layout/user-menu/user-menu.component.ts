import { Component, inject, input } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { NgClass } from '@angular/common';
import { SidebarButtonComponent } from '../../ui/sidebar-button/sidebar-button.component';
import { ThemeService } from '../../../../core/ui-services/theme.service';
import { AuthService } from '../../../../core/services/auth-services/auth.service';

@Component({
  selector: 'app-user-menu',
  imports: [SidebarButtonComponent, NgClass, RouterLink],
  templateUrl: './user-menu.component.html',
  styleUrl: './user-menu.component.scss',
})
export class UserMenuComponent {
  readonly textHidden = input<boolean>(false);
  private readonly _themeService = inject(ThemeService);
  private readonly _authService = inject(AuthService);

  confirm: boolean = false;
  async logOut() {
    await this._authService.signOut();
  }

  darkMode() {
    this._themeService.toggleTheme();
  }
}
