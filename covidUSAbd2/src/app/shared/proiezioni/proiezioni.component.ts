import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Proiezione } from 'src/app/interface/proiezioni';


@Component({
  selector: 'app-proiezioni',
  templateUrl: './proiezioni.component.html',
  styleUrls: ['./proiezioni.component.css']
})
export class ProiezioniComponent implements OnInit {

proiezioni : Proiezione[] = [];

projMap = new Map();

//genera evento per notificare HomepageComponent
@Output() proiezioniFirstTime : EventEmitter<Map<string, Proiezione>> = new EventEmitter();  //popola projMap di homepage component con i valori di default nel momento del load della componente
@Output() proiezioniHandler : EventEmitter<Map<string, Proiezione>> = new EventEmitter();

ObjectID : string ;

 
  constructor() {}

  /*Costruisce il map iniziale con i valori di default delle checkbox a true*/
  ngOnInit(): void {

    let size : number = document.getElementsByClassName('field').length;
    //console.log('sizzeee',size)

    for(let i = 0; i<size; i++){
      
      let newEntry = {
        field : document.getElementsByTagName('input')[i].name,  //nome di ogni entry
        checked : document.getElementsByTagName('input')[i].checked  //valore di ogni entry di default
      }

      this.projMap.set(newEntry.field, newEntry)  //costruisce la entry per ciascun check item

      //console.log('newentry', newEntry)

    }
   
    //console.log('dante alighieri',this.projMap);  //map inizializzato

    this.proiezioniFirstTime.emit(this.projMap);


  }


  /*Risponde all'evento proiezioneHandler(Map) di homepage.component per passare il map con i valori dei valori checked*/
  checkProiezione(item : any){
    //console.log('valore',item.srcElement.checked);
    //console.log('elemento',item.srcElement.name);

    let lastEntry = this.projMap.get(item.srcElement.name);
    //console.log('newEntry', lastEntry)

    this.projMap.set(item.srcElement.name, {field: item.srcElement.name, checked : item.srcElement.checked })

    this.proiezioniHandler.emit(this.projMap);

  }

}
