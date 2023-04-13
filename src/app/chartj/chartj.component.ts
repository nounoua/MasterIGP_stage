import { Component } from '@angular/core';
import { Chart, registerables } from 'chart.js';
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
      labels:['January', 'February', 'March', 'April', 'May', 'June', 'July','August','Septembre','Octobre'
      ,'November','December'
      

      ],
      datasets: [
        { data: [ 65, 59, 80, 81, 56, 55, 40,70,86, 27, 90,90 ], label: 'Vacation' },
        { data: [ 28, 48, 40, 19, 86, 27, 90,90,86, 27, 90,90 ], label: 'Attendance' },
        { data: [ 28, 48, 40, 19, 86, 27, 90,86, 27, 90,90,50 ], label: 'Leave' }

      ],
      
    };
  
    public barChartOptions: ChartConfiguration<'bar'>['options'] = {
      responsive: false,
      scales: {
        y: { // defining min and max so hiding the dataset does not change scale range
          min: 0,
          max: 100
        }
      }
    };

    constructor() {
    }
}
