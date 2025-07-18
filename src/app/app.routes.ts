import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth-feature/login/login.component';
import { MainComponent } from './main/main.component';
import { HomeComponent } from './features/dashboard-feature/home/home.component';

import { PasswordRecoveryComponent } from './features/auth-feature/password-recovery/password-recovery.component';
import {
  publicGuard,
} from './core/guards/auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [publicGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'recovery-password', component: PasswordRecoveryComponent },
    ],
  },
  {
    path: 'nutri',
    component: MainComponent,
    children: [
      {
        path: 'recipes',
        component:RecipesComponent,
        // canActivate: [authGuardAdmin],
      },

      {
        path: 'contacts',
        component: ContactsComponent,
        // canActivate: [authGuardSeller],
      },
      {
        path: 'my-recipes',
        component:MyRecipesComponent
      },
      {
        path: 'reports',
        component: ReportsComponent,
        canActivate: [authGuardAdmin],
      },
      {
        path: 'manifests',
        component: ManifestsComponent,
        canActivate: [authGuardSeller],
      },
      // {
      //   path: 'configurations',
      //   component: ConfigurationsComponent,
      //   canActivate: [authGuardAdmin],
      // },
    ],
  },
];
