import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-grid-covid',
  templateUrl: './grid-covid.component.html',
  styleUrls: ['./grid-covid.component.css']
})
export class GridCovidComponent implements OnInit, OnChanges {

  @Input() covidResult;
  @Input() projMap;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(simpleChanges : SimpleChanges){
    console.log('covid Result',this.covidResult)
  }

}
