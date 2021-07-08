import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-condizioni',
  templateUrl: './condizioni.component.html',
  styleUrls: ['./condizioni.component.css']
})
export class CondizioniComponent implements OnInit {

  selectedItem : string = 'Stato';  //valore checked di default

  //genera evento per notificare HomepageComponent
  @Output() condizioneHandler : EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {}

  checkCondizione(item : any){
    console.log('condizione item slecetee',item.srcElement.value);
    this.selectedItem = item.srcElement.value;
    this.condizioneHandler.emit(this.selectedItem)
  }

}
