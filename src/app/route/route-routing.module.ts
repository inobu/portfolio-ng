import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PUBLIC } from './public/route';

const routes: Routes =[ ...PUBLIC ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
