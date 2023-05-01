import { Pending, Pend } from './pending.service';
import { Component } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import {  ViewChild, enableProdMode } from '@angular/core';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();}

@Component({
  selector: 'app-my-pending-request',
  templateUrl: './my-pending-request.component.html',
  styleUrls: ['./my-pending-request.component.css']
})
export class MyPendingRequestComponent {
  tabNames = ["My Attendances/leaves requests", "Rejected requests", "Absences chart"]
 
  selectedTabIndex = 0;

  onValueChanged(e:any){
      this.selectedTabIndex = this.tabNames.indexOf(e.value);
  }
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;
  StatusLookUp=["All","rejected","pending","approved","incompleted"];
  AttendTypeLookUp=["All","home","office","leave_authorization","vacation_annual"];
  statuses: string[];
  expanded: boolean = true;
  Pending: Pend[];
  groupingValues: any[];
  saleAmountHeaderFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;

  constructor(pending:Pending) {
    this.statuses = ['All', 'Pending'];
    this.Pending = pending.getAttend();
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
    this.groupingValues = [{
      value: 'date',
      text: 'by date',
      
    }, {
      value: 'Status',
      text: 'by Status',
    },
    {
      value:'Type',
      text: 'by Type',
    },
    {
      value:'this.clearGrouping()',
      text:'Reset'
    }
  ];
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);
  }

  private static getOrderDay(rowData:any) {
    return (new Date(rowData.OrderDate)).getDay();
  }

  calculateFilterExpression(value:any, selectedFilterOperations:any, target:any) {
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[MyPendingRequestComponent.getOrderDay, '=', 0], 'or', [MyPendingRequestComponent.getOrderDay, '=', 6]];
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

  clearGrouping() {
    this.dataGrid.instance.clearGrouping()
    ;
  }


  groupChanged(e:any) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
  }
  collapseAllClick() {
    this.expanded = !this.expanded;
  }

  clearFilter() {
    this.dataGrid.instance.clearFilter();
  };

  selectStatus(data:any) {
    if (data.value == 'All') {
      this.dataGrid.instance.clearFilter();
    } else {
      this.dataGrid.instance.filter(['Task_Status', '=', data.value]);
    }
  }
  
  
  onCellPrepared(event:any) {
    console.log(event.data.Status)
    if (event.rowType === "data" && event.column.dataField === "Status" ) {
      let badgeClass = "";
      switch (event.data.Status) {
        // case "approved":
        //   badgeClass = "badge-success";
        //   break;
        case "pending":
          badgeClass = "badge-warning";
          break;
        // case "rejected":
        //   badgeClass = "badge-danger";
        //   break;
        //   case "incompleted":
        //   badgeClass = "badge-danger";
        //   break;
      }
      event.cellElement.innerHTML = `<span class="badge ${badgeClass}">${event.data.Status}</span>`;
    }

}

}
