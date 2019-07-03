import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteRoutingModule } from './route-routing.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [PublicComponent, LoginComponent],
  imports: [
    RouteRoutingModule,
    CommonModule
  ],
  exports: [
    RouterModule
  ]
})

export class RouteModule { }
