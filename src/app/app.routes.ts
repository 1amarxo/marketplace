import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: 'login', loadComponent: () => import('./core/auth/login/login.component').then(m =>m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./core/auth/register/register.component').then(m =>m.RegisterComponent)},
];
