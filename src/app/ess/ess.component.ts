import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {
  DxDataGridModule,
  DxDataGridComponent,
  DxTemplateModule,
  DxSelectBoxModule,
  DxButtonModule,
} from 'devextreme-angular';
import query from 'devextreme/data/query';
import { Servicett, Order } from './app.service';

if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-ess',
  templateUrl: './ess.component.html',
  styleUrls: ['./ess.component.css']
})
export class EssComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  orders: Order[];

  expanded = true;

  totalCount: number;

  groupingValues: any[];

  constructor(service: Servicett) {
    this.orders = service.getOrders();
    this.totalCount = this.getGroupCount('CustomerStoreState');

    this.groupingValues = [{
      value: 'CustomerStoreState',
      text: 'Grouping by State',
    }, {
      value: 'Employee',
      text: 'Grouping by Employee',
    }];
  }

  getGroupCount(groupField:any) {
    return query(this.orders)
      .groupBy(groupField)
      .toArray().length;
  }

  groupChanged(e:any) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
    this.totalCount = this.getGroupCount(e.value);
  }

  collapseAllClick() {
    this.expanded = !this.expanded;
  }

  refreshDataGrid() {
    this.dataGrid.instance.refresh();
  }

}
