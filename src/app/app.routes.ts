import { Routes } from '@angular/router';

export const routes: Routes = [
    {path:'', redirectTo:'/main',pathMatch:'full'},
    {path: 'login', loadComponent: () => import('./core/auth/login/login.component').then(m =>m.LoginComponent)},
    {path: 'register', loadComponent: () => import('./core/auth/register/register.component').then(m =>m.RegisterComponent)},
    {path: 'main',loadComponent: () => import('./market/main/main.component').then(m =>m.MainComponent)}
];
