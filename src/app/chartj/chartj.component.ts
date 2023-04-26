import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';




@Component({
  selector: 'app-chartj',
  templateUrl: './chartj.component.html',
  styleUrls: ['./chartj.component.css']
})
export class ChartjComponent {
  title = 'ng2-charts-demo';

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    datasets: [
      { data: [ 15, 20, 18, 19, 10,  ], label: 'Attendance' },
      { data: [ 5, 0, 4, 1, 5,  ], label: 'Vacation' },
      { data: [ 2, 1, 0, 2, 4, ], label: 'Absence' },
      

    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };
  

  


  
  constructor(){}  
  
}