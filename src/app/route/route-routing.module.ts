import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PUBLIC } from './public/route';
import { SECURIYT } from './security/route';

const routes: Routes = [
  { path: '', redirectTo: '/security', pathMatch: 'full' },
  ...PUBLIC, ...SECURIYT]
  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
