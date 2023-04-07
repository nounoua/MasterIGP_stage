import { Component } from '@angular/core';

@Component({
  selector: 'app-chartj',
  templateUrl: './chartj.component.html',
  styleUrls: ['./chartj.component.css']
})
export class ChartjComponent {
  sampleData: any[] = [
    { Month: 'January', Vacation: 30, Abscense: 0, Attendance: 25 },
    { Month: 'February', Vacation: 25, Abscense: 25, Attendance: 0 },
    { Month: 'March', Vacation: 30, Abscense: 0, Attendance: 25 },
    { Month: 'April', Vacation: 35, Abscense: 25, Attendance: 45 },
    { Month: 'May', Vacation: 0, Abscense: 20, Attendance: 25 },
    { Month: 'June', Vacation: 30, Abscense: 0, Attendance: 30 },
    { Month: 'July', Vacation: 60, Abscense: 45, Attendance: 0 },
    { Month: 'August', Vacation: 60, Abscense: 45, Attendance: 0 },
    { Month: 'Septembre', Vacation: 60, Abscense: 45, Attendance: 0 },
    { Month: 'Octobre', Vacation: 60, Abscense: 45, Attendance: 0 },
    { Month: 'November', Vacation: 60, Abscense: 45, Attendance: 0 },
    { Month: 'December',Vacation: 60, Abscense: 45, Attendance: 0 },


];
padding: any = { left: 10, top: 15, right: 8, bottom: 8 };
titlePadding: any = { left: 90, top: 0, right: 0, bottom: 10 };
getWidth() : any {
if (document.body.offsetWidth < 1200) {
  return '90%';
}

return 1200;
}
xAxis: any =
{
    dataField: 'Month',
    unitInterval: 1,
    axisSize: 'auto',
    tickMarks: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
    },
    gridLines: {
        visible: true,
        interval: 1,
        color: '#BCBCBC'
    }
};
valueAxis: any =
{
    unitInterval: 10,
    minValue: 0,
    maxValue: 100,
    title: { text: '' },
    labels: { horizontalAlignment: 'right' },
    tickMarks: { color: '#BCBCBC' }
};
seriesGroups: any[] =
[
    {
        type: 'stackedcolumn',
        columnsGapPercent: 50,
        seriesGapPercent: 0,
        series: [
            { dataField: 'Vacation', displayText: 'Vacation' },
            { dataField: 'Abscense', displayText: 'Abscense' },
            { dataField: 'Attendance', displayText: 'Attendance' }
        ]
    }
];
}
