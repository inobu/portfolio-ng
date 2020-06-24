import { Routes } from '@angular/router';
import { SecurityComponent } from './security.component';
import { AuthGuard } from '@portfolio/auth';

export const SECURIYT: Routes = [
    { path: 'security', component: SecurityComponent, canActivate: [AuthGuard] },
];
