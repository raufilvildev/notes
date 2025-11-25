import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Login } from './pages/login/login';
import { Signup } from './pages/signup/signup';
import { ForgotPassword } from './pages/forgot-password/forgot-password';
import { ResetPassword } from './pages/reset-password/reset-password';
import { Dashboard } from './pages/dashboard/dashboard';
import { Notes } from './pages/dashboard/notes/notes';
import { Settings } from './pages/dashboard/settings/settings';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'signup', component: Signup },
  { path: 'login', component: Login },
  { path: 'forgot-password', component: ForgotPassword },
  { path: 'reset-password', component: ResetPassword },
  {
    path: 'dashboard',
    component: Dashboard,
    children: [
      { path: '', component: Notes },
      { path: 'settings', component: Settings },
    ],
  },
  { path: '**', redirectTo: '' },
];
