import { Routes } from '@angular/router';
import { LogInComponent } from './features/auth-feature/login/login.component';
import { MainComponent } from './main/main.component';

import { AuthGuard, AuthGuardUserName } from './core/guards/auth.guard';
import { ContactsComponent } from './features/contacts-feature/contacts/contacts.component';
import { MyRecipesComponent } from './features/recipes-feature/pages/my-recipes/my-recipes.component';
import { RecomendationsComponent } from './features/recomendatios-feature/recomendations/recomendations.component';
import { RecipesComponent } from './features/recipes-feature/pages/recipes/recipes.component';

export const routes: Routes = [
  { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'log-in', pathMatch: 'full' },
      { path: 'log-in', component: LogInComponent },
    ],
  },
  {
    path: 'nutri',
    component: MainComponent, 
    children: [
      { path: '', redirectTo: 'recipes', pathMatch: 'full' },
      {
        path: 'recipes',
        component: RecipesComponent,
        // canActivate: [authGuardAdmin],
      },

      {
        path: 'contacts',
        component: ContactsComponent,
        // canActivate: [authGuardSeller],
      },
      {
        path: 'my-recipes',
        component: MyRecipesComponent,
      },
      {
        path: 'recomendations',
        component: RecomendationsComponent,
      },
    ],
  },
];
