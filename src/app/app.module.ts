import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFullpageModule } from '@fullpage/angular-fullpage';
import { HomeComponent } from './features/home/home.component';
import { IamComponent } from './features/iam/iam.component';
import { ServicesComponent } from './features/services/services.component';
import { FirstComponent } from './features/services/first/first.component';
import { SecondComponent } from './features/services/second/second.component';
import { ThirdComponent } from './features/services/third/third.component';
import { ContactsComponent } from './features/contacts/contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IamComponent,
    ServicesComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    ContactsComponent
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
