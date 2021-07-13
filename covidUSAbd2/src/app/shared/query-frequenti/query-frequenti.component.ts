import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { Lockdown } from 'src/app/interface/lockdown';
import { QueryFrequenti } from 'src/app/interface/queryFrequenti';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-query-frequenti',
  templateUrl: './query-frequenti.component.html',
  styleUrls: ['./query-frequenti.component.css']
})
export class QueryFrequentiComponent implements OnInit, OnChanges {

  @Input() pagination : string;
  @Input() condizione : string;
  @Input() states : string[];
  @Input() counties : string[];
  @Input() cities : string[];

  //genera evento per notificare HomepageComponent
  @Output() queryFrequentiDefaultElement : EventEmitter<QueryFrequenti> = new EventEmitter();  //restituisce al caricamento della componente un array queryFrequenti contenente i valori di default a homepage.component
  @Output() queryFrequentiHandler : EventEmitter<QueryFrequenti> = new EventEmitter(); 

  //Restituisce un oggetti Integration con tutti i campi
  queryFrequenti : QueryFrequenti;

  listaQuery : string[] = [];

  listaLockdown : Lockdown[] = [];

  constructor(public http : HttpClient, protected service : MainService) { }

  ngOnInit(): void {

    console.log('stati query frequenti',this?.states)

    /*LISTA QUERIES*/
    this.listaQuery.push('Report Covid-19: casi e morti per ciascuno stato')
    this.listaQuery.push('Confronta i casi di Covid-19 tra due diversi stati')
    this.listaQuery.push('Report QoA per stato')
    this.listaQuery.push('Visualizza andamento QoA pre/post lockdown')
    this.listaQuery.push('Visualizza l\'andamento dei contagi pre/post lockdown')

    console.log('lista query', this.listaQuery)

    let newQueryFrequentiObj = {
      tipo_query : this.listaQuery[0],
      stato1 : '',
      stato2 : '',
      lockdown_stato1: [{
        tipo : '',
        data : '',
      }]
    }

    this.queryFrequenti = newQueryFrequentiObj;

    this.queryFrequentiDefaultElement.emit(this.queryFrequenti);  //notifica homepage component con integration di default

  }

  ngOnChanges(simpleChanges : SimpleChanges){

    //this.states = simpleChanges.states.currentValue.state;

    let newQueryFrequentiObj = {
      tipo_query : this.listaQuery[0],
      stato1 : this.states[0] || '',
      stato2 : this.states[this.states.length-1] || '',
      lockdown_stato1: [{
        tipo : '',
        data : '',
      }]

    }

    this.queryFrequenti = newQueryFrequentiObj;

    this.queryFrequentiDefaultElement.emit(this.queryFrequenti);  //notifica homepage component con integration di default

  }

  getQueryFrequenti($event){


    switch($event.srcElement.id){
      case 'TipoQuery' : this.queryFrequenti.tipo_query = $event.srcElement.value; break;
      case 'Stato1' : this.queryFrequenti.stato1 = $event.srcElement.value; break;
      case 'Stato2' : this.queryFrequenti.stato2 = $event.srcElement.value; break;
      default : break;
    }

    console.log('specializzazioni id', $event.srcElement.id)
    console.log('specializzaioni values',$event.srcElement.value);
    console.log('queryFrequenti in queryFrequenti.component.ts', this.queryFrequenti)

    this.queryFrequentiHandler.emit(this.queryFrequenti);

  }

  getLockdownByState($event){

    console.log('changes in getLockdownByState')

    let body = {
      state : $event.srcElement.value
    }

    /*query per ottenere lista degli stati*/

    this.http.post<string[]>(this.service.urlServer+'/chartsQuery/getLockdown',body)
    .subscribe( (response:string[]) => {
      //this.states = response;
      console.log('lockdown in queryFrequenti', response)
    }, error => {
      console.log('error',error.error.text)
    })


  }

}
