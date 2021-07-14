import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-grid-query-frequenti',
  templateUrl: './grid-query-frequenti.component.html',
  styleUrls: ['./grid-query-frequenti.component.css']
})
export class GridQueryFrequentiComponent implements OnInit, OnChanges {

  @Input() answer;
  @Input() projMap;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() : void {
    console.log('onChangeProjMapQueryFrequenti', this.projMap)
    console.log('onChangeGridQueryFrequenti', this.answer)
  }

}
