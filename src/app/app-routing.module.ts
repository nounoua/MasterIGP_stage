import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent  } from './dashboard/dashboard.component';
import { SettingsComponent } from './settings/settings.component';
import { TablesComponent } from './tables/tables.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalsComponent } from './modals/modals.component';
import { FormsComponent } from './forms/forms.component';
import { ChartjComponent } from './chartj/chartj.component';
import { WorkTimeSheetComponent } from './work-time-sheet/work-time-sheet.component';
import { TableDevextremeComponent } from './table-devextreme/table-devextreme.component';
import { RejectedRequestComponent } from './rejected-request/rejected-request.component';
import { MyAttendanceComponent } from './my-attendance/my-attendance.component';
import { MyRegularizationComponent } from './my-regularization/my-regularization.component';
import { AttendanceValidationComponent } from './attendance-validation/attendance-validation.component';
import { AttenadanceCorrectionComponent } from './attenadance-correction/attenadance-correction.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'View Attendance', component: MyRegularizationComponent },
  { path: '', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'chartj', component: ChartjComponent },
  { path: 'worktimesheet', component: WorkTimeSheetComponent },
  { path: 'tabledevextreme', component: TableDevextremeComponent},
  { path: 'rejectedRequest', component: RejectedRequestComponent},
  { path: 'attendancevalidation', component: AttendanceValidationComponent},
  { path: 'attenadanceCorrection', component: AttenadanceCorrectionComponent},

  









];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
