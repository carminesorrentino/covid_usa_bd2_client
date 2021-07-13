import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-chart-covid',
  templateUrl: './chart-covid.component.html',
  styleUrls: ['./chart-covid.component.css']
})
export class ChartCovidComponent implements OnInit, OnChanges {

  @Input() answer;

  @Input() projMap;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges){
    console.log('covid Result',this.answer)
  }

}
