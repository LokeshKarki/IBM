import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fusion',
  templateUrl: './fusion.component.html',
  styleUrls: ['./fusion.component.css']
})
export class FusionComponent implements OnInit { 
  dataSource: Object;
  constructor(private router: Router) {
    const chartData = [
      {
        label: "Venezuela",
        value: "30"
      },
      {
        label: "Saudi",
        value: "120"
      },
      {
        label: "Canada",
        value: "80"
      },
      {
        label: "Iran",
        value: "50"
      },
      {
        label: "Russia",
        value: "150"
      },
      {
        label: "UAE",
        value: "100"
      },
      {
        label: "US",
        value: "140"
      },
      {
        label: "China",
        value: "130"
      }
    ];

    const dataSource = {
      chart: {
     
        caption: "Countries GDP in  [2017-18]",
      
        subCaption: "CountryWise GDP",
        xAxisName: "Country",
        yAxisName: "$ billion ",
        numberSuffix: "K",
        theme: "fusion"
      },
      data: chartData
    };
    this.dataSource = dataSource;
  }

  ngOnInit(): void {
  }

}
