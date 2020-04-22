import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  count:string;
  totalQuestion:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe(params =>{
      this.count=params.get("count");
      this.totalQuestion=params.get("totalQuestion");
      console.log(this.count);
      console.log(this.totalQuestion);
      
  })

}
}
