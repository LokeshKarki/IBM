import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {
  @Input('caption') title: string = ""
  @Input('summary') summary: string = ""

  constructor() { }

  ngOnInit(): void {
  }

}
