import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/Services/socket.service';
import * as Chart from 'chart.js';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.css']
})
export class DynamicComponent implements OnInit {

  title = 'livechart';
  chart;
  constructor(private srv:SocketService){

  }
  ngOnInit(){

    this.srv.listen('dataupdate').subscribe((res:any)=>{
      console.log(res);
      this.chart.data.datasets[0].data=res;
      this.chart.update();
    });
    this.chart=new Chart('canvas',{
      
      type:'bar',
      options:{
        responsive:true,
        title:{
          display:true,
          text:'Realtime Charts'
        },
      },
      data:{
        labels:['Jan','Feb','March','April','May','June','July','August'],
        datasets:[
          {
            type:'bar',
            label:'Test Chart',
            // data:[10,3,6,11,38,5,6,17],

            backgroundColor:'#3F3FBF',
            fill:false
          }
        ]
      }
    });
  }
}


