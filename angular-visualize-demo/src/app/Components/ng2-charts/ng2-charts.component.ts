import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';

import { MultiDataSet, Label } from 'ng2-charts';
@Component({
  selector: 'app-ng2-charts',
  templateUrl: './ng2-charts.component.html',
  styleUrls: ['./ng2-charts.component.css']
})
export class Ng2ChartsComponent {

  doughnutChartLabels: Label[] = ['BMW', 'Ford', 'Tesla'];
  doughnutChartData: MultiDataSet = [
    [55, 25, 20]
  ];
  doughnutChartType: ChartType = 'doughnut';



  // constructor() { }

  // ngOnInit(): void {
  // }

}
