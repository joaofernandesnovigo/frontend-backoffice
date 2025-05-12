import { Routes } from '@angular/router';
import { LoginPageComponent } from '../screens/login-page.component';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
