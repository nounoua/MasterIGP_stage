import { Component } from '@angular/core';

@Component({
  selector: 'app-my-regularization',
  templateUrl: './my-regularization.component.html',
  styleUrls: ['./my-regularization.component.css']
})
export class MyRegularizationComponent {
  tabNames = ["My Attendances/leaves requests", "Rejected requests", "Absences chart"]
 
    selectedTabIndex = 0;
 
    onValueChanged(e:any){
        this.selectedTabIndex = this.tabNames.indexOf(e.value);
    }

}
