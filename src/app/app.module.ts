import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HomeComponent } from './features/home/home.component';
import { IamComponent } from './features/iam/iam.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFullpageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
