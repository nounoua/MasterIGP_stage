import {
  NgModule, Component, ViewChild, enableProdMode,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxDataGridModule, DxDataGridComponent, DxButtonModule } from 'devextreme-angular';
import query from 'devextreme/data/query';
import 'devextreme/data/odata/store';
import { AttendanceReport, attendRep} from './attendanceReport.service';
import { exportDataGrid } from 'devextreme/excel_exporter';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
const htmlToPdfmake = require('html-to-pdfmake');
import * as pdfjsLib from 'pdfjs-dist';
import 'pdfjs-dist/build/pdf.worker.entry';
 const html2canvas = require('html2canvas');
const pdfMake = require('pdfmake');
import { exportDataGrid as exportDataGridToPdf } from 'devextreme/pdf_exporter';
import { jsPDF } from 'jspdf';
if (!/localhost/.test(document.location.host)) {
  enableProdMode();
}
@Component({
  selector: 'app-attendance-report',
  templateUrl: './attendance-report.component.html',
  styleUrls: ['./attendance-report.component.css'],
  preserveWhitespaces: true,

})
export class AttendanceReportComponent {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid!: DxDataGridComponent;

  AttendTypeLookUp = ["All", "home", "office", "leave_authorization", "vacation_annual"];
  expanded: boolean = true;
  attendrep: attendRep[];
  saleAmountHeaderFilter: any;
  showFilterRow: boolean;
  showHeaderFilter: boolean;
  groupingValues: any[];

  constructor(private repoService: AttendanceReport) {
    this.attendrep = repoService.getValiadtionAttend();
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
      value: 'WorkDate',
      text: 'by date',
      
    }, {
      value: 'Status',
      text: 'by Status',
    },
    {
      value:'this.clearFilter()',
      text:'Reset'
    }
  ];
    // this.totalCount = this.getGroupCount('WorkDate');
    this.orderHeaderFilter = this.orderHeaderFilter.bind(this);

  }


  MILLISECONDS_IN_DAY = 1000 * 60 * 60 * 24;

  dataSource: any = {

    select: [
      'Fullname',
      'WorkDate',
      'CheckIn',
      'CheckOut',
      'Status',
      'TotalExtraHours',
      'LeaveHours'
    ],
  };

  private static getOrderDay(rowData: any) {
    return (new Date(rowData.OrderDate)).getDay();
  }
  calculateFilterExpression(value: any, selectedFilterOperations: any, target: any) {
    const column = this as any;
    if (target === 'headerFilter' && value === 'weekends') {
      return [[AttendanceReportComponent.getOrderDay, '=', 0], 'or', [AttendanceReportComponent.getOrderDay, '=', 6]];
    }
    return column.defaultCalculateFilterExpression.apply(this, arguments);
  }
  orderHeaderFilter(data: any) {
    data.dataSource.postProcess = (results: any) => {
      results.push({
        text: 'Weekends',
        value: 'weekends',
      });
      return results;
    };
  }
  clearFilter() {
    this.dataGrid.instance.clearGrouping()
    ;
  }
  getGroupCount(groupField:any) {
    return query(this.attendrep)
      .groupBy(groupField)
      .toArray().length;
  }

  groupChanged(e:any) {
    this.dataGrid.instance.clearGrouping();
    this.dataGrid.instance.columnOption(e.value, 'groupIndex', 0);
  }
  collapseAllClick() {
    this.expanded = !this.expanded;
  }
  
  //pour downlood tableau en xsl
  async exportGrid(e: any) {
    console.log(e)
    if (e.format == "pdf") {
      const doc = new jsPDF();
      exportDataGridToPdf({
          jsPDFDocument: doc,
          component: this.dataGrid.instance
      }).then(() => {
          doc.save('attendanceReport.pdf');
      })

    }
    else {
      // Acquire Data (reference to the HTML table)
      var table_elt = document.getElementById("grid-container");

      // Extract Data (create a workbook object from the table)
      var workbook = XLSX.utils.table_to_book(table_elt);

      // Process Data (add a new row)
      var ws = workbook.Sheets["Sheet1"];
      XLSX.utils.sheet_add_aoa(ws, [["Created " + new Date().toISOString()]], { origin: -1 });

      // Package and Release Data (writeFile tries to write and save an XLSB file)
      XLSX.writeFile(workbook, "Report.xlsb");
    }


  }
  // generatePdf(event:any) {

  //   }


}


