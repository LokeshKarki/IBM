import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input('caption') title: string = ""
  @Input('summary') summary: string = ""
  @Input('id') id: number = null;

  constructor() { }

  ngOnInit(): void {
  }

}
