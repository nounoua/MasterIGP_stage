import { Component } from '@angular/core';
import { OnInit, Input, ViewChild } from '@angular/core/';
import { DatePipe } from '@angular/common';

import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxRangeSelectorModule, DxSelectBoxModule, DxDataGridModule } from 'devextreme-angular';






@Component({
  selector: 'app-work-time-sheet',
  templateUrl: './work-time-sheet.component.html',
  styleUrls: ['./work-time-sheet.component.css']
})
export class WorkTimeSheetComponent implements OnInit {
 
  ngOnInit(): void {

  }

  constructor(){}
  startValue: Date = new Date(2011, 1, 1);
  endValue: Date = new Date(2011, 6, 1);
  selectedStartValue: Date = new Date(2011, 1, 5);
  selectedEndValue: Date = new Date(2011, 2, 5);

  

}













