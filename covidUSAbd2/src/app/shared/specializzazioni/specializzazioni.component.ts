import { Component, OnInit, OnChanges, Input, SimpleChanges } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-specializzazioni',
  templateUrl: './specializzazioni.component.html',
  styleUrls: ['./specializzazioni.component.css']
})
export class SpecializzazioniComponent implements OnInit, OnChanges {

  @Input() pagination : string;

  constructor(public service : MainService) { }

  ngOnInit(): void {
    console.log('specializzazioni pagination onInit', this.pagination)
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('OnBestemmioChanges', changes)
    
    // changes.prop contains the old and the new value...
  }

}
