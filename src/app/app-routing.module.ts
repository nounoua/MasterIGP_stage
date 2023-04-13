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
import { ServiceComponent } from './dashboard/service/service.component';
import { TimeworkingComponent } from './timeworking/timeworking.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'ta', component: TablesComponent },
  { path: 'sign-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'forgotpassword', component: ForgotpasswordComponent },
  { path: 'resetpassword', component: ResetpasswordComponent },
  { path: 'buttons', component: ButtonsComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'forms', component: FormsComponent },
  { path: 'chartj', component: ChartjComponent },
  { path: 'work', component: WorkTimeSheetComponent},
  { path: 'service', component: ServiceComponent},
  { path: 'working', component: TimeworkingComponent}
  // { path: 'table', component: TableDevextremeComponent},








];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
