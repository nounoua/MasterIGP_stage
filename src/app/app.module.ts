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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from "@angular/forms";
import { ModalcComponent } from './dashboard/modalc/modalc.component';
import { ChartjComponent } from './chartj/chartj.component';
import { ServiceComponent } from './dashboard/service/service.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';//slider work time sheett
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
// import { TableDevextremeComponent } from './table-devextreme/table-devextreme.component';
import { NgChartsModule } from 'ng2-charts';//pour chart
import { WorkTimeSheetComponent } from './work-time-sheet/work-time-sheet.component'; //pour chart js 
import { DxRangeSelectorModule, DxDataGridModule,DxNumberBoxModule,DxButtonModule,DxTabPanelModule
} from 'devextreme-angular';
//import {  Vacation,Service } from 'src/app/table-devextreme/app.service';
import { Vacation, Service } from 'src/app/work-time-sheet/app.service';
import { Order,Servicet } from './rejected-request/rejectedtable.service';
import {
  DxDataGridComponent,
  //DxDataGridModule,
  DxSelectBoxModule,
  DxCheckBoxModule,
  DxTemplateModule,
  DxListModule

  
  

} from 'devextreme-angular';
import { TableDevextremeComponent } from './table-devextreme/table-devextreme.component';
import { RejectedRequestComponent } from './rejected-request/rejected-request.component';
import { MyRegularizationComponent } from './my-regularization/my-regularization.component';
import {  Attend, attendance} from 'src/app/my-attendance/MyAttendance.service';
import { AttendanceValidationComponent } from './attendance-validation/attendance-validation.component';//service attendance
import { Validationattendance } from 'src/app/attendance-validation/validationatt.service';
import { AttenadanceCorrectionComponent } from './attenadance-correction/attenadance-correction.component';
import { IncompletedAttendanceC } from './attenadance-correction/incompletedAttend.service';
import { DashboardRhComponent } from './dashboard-rh/dashboard-rh.component';
import { AttendanceReportComponent } from './attendance-report/attendance-report.component';
import { ValidationRequestRh } from './dashboard-rh/rhvalidation.service';
import { AttendanceReport } from './attendance-report/attendanceReport.service';
import { VacationReportComponent } from './vacation-report/vacation-report.component';
import { VacationReport } from './vacation-report/vacation.service';
import { EssComponent } from './ess/ess.component';
import { Servicett } from './ess/app.service';


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
    MyAttendanceComponent,

    WorkTimeSheetComponent,
    TableDevextremeComponent,
    RejectedRequestComponent,
    MyRegularizationComponent,
    AttendanceValidationComponent,
    AttenadanceCorrectionComponent,
    DashboardRhComponent,
    AttendanceReportComponent,
    VacationReportComponent,
    EssComponent,

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
    FormsModule,
    NgChartsModule,
    DxRangeSelectorModule,
    DxDataGridModule,
    DxNumberBoxModule ,
    DxSelectBoxModule,
    DxButtonModule,
    DxTabPanelModule,
    DxTemplateModule,
    DxSelectBoxModule,
    DxCheckBoxModule,
    DxListModule


    
    
    
	  

  ],
  providers: [ Service,DatePipe,Servicet,attendance,Validationattendance,IncompletedAttendanceC,ValidationRequestRh,AttendanceReport,VacationReport,Servicett ],

  bootstrap: [AppComponent]


})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);