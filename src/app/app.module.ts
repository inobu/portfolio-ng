import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouteModule } from './route/route.module';

import { AmplifyAngularModule, AmplifyService } from 'aws-amplify-angular';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouteModule,
    AmplifyAngularModule
  ],
  exports: [
  ],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
