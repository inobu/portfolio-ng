import { MaterialModule } from '@portfolio/material';

import { PublicComponent } from './public/public.component';
import { LoginComponent } from './public/login/login.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouteRoutingModule } from './route-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './public/signup/signup.component';
import { SecurityComponent } from './security/security.component';


@NgModule({
  declarations: [PublicComponent, LoginComponent, SignupComponent, SecurityComponent],
  imports: [
    ReactiveFormsModule,
    RouteRoutingModule,
    CommonModule,
    MaterialModule
  ],
  exports: [
    RouterModule,
    PublicComponent
  ],
  entryComponents: []
})

export class RouteModule { }
