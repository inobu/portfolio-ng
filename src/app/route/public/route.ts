import { Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

export const PUBLIC: Routes = [
    { path: '', component: PublicComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }
];
