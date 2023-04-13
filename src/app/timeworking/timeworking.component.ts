import { Component } from '@angular/core';
import { enableProdMode,ViewChild } from '@angular/core';
import { Employee, Service } from './app.service';
import { DatePipe } from '@angular/common';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-timeworking',
  templateUrl: './timeworking.component.html',
  styleUrls: ['./timeworking.component.css'],
  preserveWhitespaces: true

})
export class TimeworkingComponent {
  
  //filter
  title = 'filter';
  startValue: Date = new Date(2021, 12, 31);
  endValue: Date = new Date();
  start:any = this.datePipe.transform(this.startValue, "yyyy-MM-dd");
  end:any = this.datePipe.transform(this.endValue, "yyyy-MM-dd");
  selectedStartValue: Date = new Date(2021, 12, 31);
  selectedEndValue: Date = new Date(2022, 2, 1);
  employees: Employee[];
  selectedEmployees: Employee[];
  tableTitles: string[] = ['Full name', 'Team','BirthYear', 'Vacation balance', 'Total taken Vacation', 'Total worked days','Total leave hours','Off boarding date','Total absence days','Total Vacation'];
  constructor(service: Service,  private datePipe: DatePipe) {
    this.employees = service.getEmployees();
    this.selectedEmployees = this.employees;
   
  }

  onValueChanged(e: { value: Date[]; }) {
    const selectedEmployees: any[] = [];
   this.start = this.datePipe.transform(e.value[0], "yyyy-MM-dd") ;
    this.end = this.datePipe.transform(e.value[1], "yyyy-MM-dd");
    this.employees.forEach((item, index) => {
      if (item.BirthYear >= e.value[0] && item.BirthYear <= e.value[1]) {
        selectedEmployees.push(item);
      }
    });
    this.selectedEmployees = selectedEmployees;
  }

}
