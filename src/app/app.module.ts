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
import { MatDialogModule } from "@angular/material";
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { DatePipe } from '@angular/common';
import interactionPlugin from '@fullcalendar/interaction'; // Import the interaction plugin
import { ResizableModule } from 'angular-resizable-element';
import { Component } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { ModalcComponent } from './dashboard/modalc/modalc.component';
import { jqxChartModule } from 'jqwidgets-ng/jqxchart';
import { ChartjComponent } from './chartj/chartj.component';
import { ServiceComponent } from './dashboard/service/service.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//slider work time sheett
//import { DxRangeSelectorModule, DxSelectBoxModule, DxDataGridModule } from 'devextreme-angular';//slider work time sheett
import { NgChartsModule } from 'ng2-charts';
//import { GridAllModule } from '@syncfusion/ej2-angular-grids';
import { TimeworkingComponent } from './timeworking/timeworking.component'; 
//import {  DxNumberBoxModule } from 'devextreme-angular';
import { Employee, Service } from 'src/app/timeworking/app.service';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
// import { TableDevextremeComponent } from './table-devextreme/table-devextreme.component';



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
    ModalcComponent,
    ChartjComponent,
    
    ServiceComponent,
    
    TimeworkingComponent,
    MyAttendanceComponent,
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    HttpClientModule,
    HttpClientTestingModule,// Import the HttpClientTestingModule here
    FullCalendarModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,

    }),
    NgbModule,
    ModalModule.forRoot(),
    ReactiveFormsModule,
    jqxChartModule,
    FormsModule,
    
    
    
	  

  ],
  providers: [Service, DatePipe],

  bootstrap: [AppComponent]


})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);

