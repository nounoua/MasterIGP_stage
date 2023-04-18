import { Component } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import {  IncompletedAttend,IncompletedAttendanceC } from 'src/app/attenadance-correction/incompletedAttend.service';
import {  ViewChild, enableProdMode } from '@angular/core';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();}
@Component({
  selector: 'app-attenadance-correction',
  templateUrl: './attenadance-correction.component.html',
  styleUrls: ['./attenadance-correction.component.css'],
  preserveWhitespaces: true,

})
export class AttenadanceCorrectionComponent {
  lookupData = ['All',
  "home","office","leave_authorization","vacation_annual"
];
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;
  expanded: boolean = true;

  incompA:IncompletedAttend[];

  saleAmountHeaderFilter: any;

 

  showFilterRow: boolean;

  showHeaderFilter: boolean;

  constructor(incompleted: IncompletedAttendanceC ) {
    this.incompA = incompleted.getIncompA();
    this.showFilterRow = true;
    this.showHeaderFilter = false;
   
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

  private static getOrderDay(rowData:any) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  calculateFilterExpression(value:any, selectedFilterOperations:any, target:any) {
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[AttenadanceCorrectionComponent.getOrderDay, '=', 0], 'or', [AttenadanceCorrectionComponent.getOrderDay, '=', 6]];
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

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  }
  onCellPrepared(event:any) {
    console.log(event.data.Status)
    if (event.rowType === "data" && event.column.dataField === "Status" ) {
      let badgeClass = "";
      switch (event.data.Status) {
        case "approved":
          badgeClass = "badge-success";
          break;
        case "pending":
          badgeClass = "badge-warning";
          break;
        case "incompleted":
          badgeClass = "badge-danger";
          break;
      }
      event.cellElement.innerHTML = `<span class="badge ${badgeClass}">${event.data.Status}</span>`;
    }

}

}
