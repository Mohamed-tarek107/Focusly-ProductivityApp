import { Routes } from '@angular/router';
import { Register } from './components/Auth/register/register';
import { Login } from './components/Auth/login/login';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: Login },
    { path: 'Register', component: Register }
];
