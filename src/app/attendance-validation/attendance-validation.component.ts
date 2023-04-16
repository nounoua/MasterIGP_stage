import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DxDataGridModule, DxDataGridComponent, DxButtonModule } from 'devextreme-angular';
import query from 'devextreme/data/query';
import 'devextreme/data/odata/store';
import { validation, Validationattendance } from './validationatt.service';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}

@Component({
  selector: 'app-attendance-validation',
  templateUrl: './attendance-validation.component.html',
  styleUrls: ['./attendance-validation.component.css'],
  preserveWhitespaces: true,

})
export class AttendanceValidationComponent  {
  expanded: boolean = true;

  attendance: validation[];

  saleAmountHeaderFilter: any;

 

  showFilterRow: boolean;

  showHeaderFilter: boolean;
  constructor(private attendService:Validationattendance){
    this.attendance = attendService.getValiadtionAttend();
    this.showFilterRow = true;
    this.showHeaderFilter = true;
   
    this.saleAmountHeaderFilter = [{
      text: 'Less than $3000',
      value: ['SaleAmount', '<', 3000],
    }, {
      text: '$3000 - $5000',
      value: [
        ['SaleAmount', '>=', 3000],
        ['SaleAmount', '<', 5000],
      ],
    }, {
      text: '$5000 - $10000',
      value: [
        ['SaleAmount', '>=', 5000],
        ['SaleAmount', '<', 10000],
      ],
    }, {
      text: '$10000 - $20000',
      value: [
        ['SaleAmount', '>=', 10000],
        ['SaleAmount', '<', 20000],
      ],
    }, {
      text: 'Greater than $20000',
      value: ['SaleAmount', '>=', 20000],
    }];
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);

  }
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

  dataSource: any = {
   
    select: [
      'User',
      'Team',
      'Date',
      'CheckInTime',
      'CheckOutTime',
      'Type',
    ],
  };

  

 

  

   
  private static getOrderDay(rowData:any) {
    return (new Date(rowData.OrderDate)).getDay();
  }
  calculateFilterExpression(value:any, selectedFilterOperations:any, target:any) {
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[AttendanceValidationComponent.getOrderDay, '=', 0], 'or', [AttendanceValidationComponent.getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }
  orderHeaderFilter(data:any) {
    data.dataSource.postProcess = (results:any) => {
      results.push({
        text: 'Weekends',
        value: 'weekends',
      });
      return results;
    };
  }
}
