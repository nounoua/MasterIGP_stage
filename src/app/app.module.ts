import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TablesComponent } from './tables/tables.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsComponent } from './forms/forms.component';
import { ModalsComponent } from './modals/modals.component';
import { NotificationsComponent } from './notifications/notifications.component';
import {MatDialogModule} from "@angular/material";
import { CalendarModule, DateAdapter} from 'angular-calendar';
import { HttpClientModule} from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePipe } from '@angular/common';
import interactionPlugin from '@fullcalendar/interaction'; // Import the interaction plugin

import { ResizableModule } from 'angular-resizable-element';


FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  interactionPlugin
]);


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    SettingsComponent,
    TablesComponent,
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    ButtonsComponent,
    FormsComponent,
    ModalsComponent,
    NotificationsComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientTestingModule ,// Import the HttpClientTestingModule here
  
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,

    }),

     

  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
 

})
export class AppModule { }
