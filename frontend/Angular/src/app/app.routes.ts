import { Routes } from '@angular/router';
import { Register } from './components/Auth/register/register';
import { Login } from './components/Auth/login/login';
import { ForgetPage } from './components/Auth/forget-page/forget-page';

export const routes: Routes = [
    { path: '', redirectTo: 'Login', pathMatch: 'full' },
    { path: 'Login', component: Login },
    { path: 'Register', component: Register },
    { path: 'Forget', component: ForgetPage}
];
