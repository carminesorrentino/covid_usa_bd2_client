import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Integration } from 'src/app/interface/integration';
import { Proiezione } from 'src/app/interface/proiezioni';
import { MainService } from 'src/app/services/main.service';

import * as moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { Risposta } from 'src/app/interface/risposta';
import { QueryFrequenti } from 'src/app/interface/queryFrequenti';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  pagination : string; /*Nome del pagination attivo*/
  
  projMap = new Map(); /*valori relativi alle proiezioni per le pagine tranne query frequenti*/
  projMapQueryFrequenti = new Map(); /*map proiezioni per le query frequenti*/

  selectedItem : string = 'Stato'; //valore di default

  dataInizio : string = '';  //dataInizio
  dataFine : string = ''; //dataFine

  dataInizioView : string;  //data inizio per la formattazione nella homepage (dd:mm:yyyy)
  dataFineView : string; //data fine per la formattazione nella homepage  (dd:mm:yyyy)

  specializzazioni : Integration;  //array contenente tutti i valori degli elementi in specializzazioni.component

  queryFrequenti : QueryFrequenti; //array contenente tutti i valori degli elementi in queryFrequenti.component

  states : string[]; //array di tutti gli stati
  states_and_lockdown : string[]; //array di stati per cui esiste almeno un lockdown
  counties : string[];  //array di contee
  cities : string[];  //array di città

  answer : Risposta;  //risposta contenete i risultati delle query per i primi 4 campi (tutti tranne queryFrequenti)

  //risposte
  queryStatus : string = "non eseguita";  //[non eseguita | in attesa | completata]
  noAnswer : boolean;    //false = non si sono verificati errori o risposte vuote
                                  //true = ricevuta una risposta vuota o un errore

  constructor(public service : MainService, protected http : HttpClient) { 
    console.log('pagination homepage', this.pagination)

    let body = {}

    /*query per ottenere lista degli stati*/

    this.http.post<string[]>(this.service.urlServer+'/homepage/getState',body)
    .subscribe( (response:string[]) => {
      this.states = response;
    }, error => {
      console.log('error',error.error.text)
    })


     /*query per ottenere lista degli stati che hanno almeno un lockdown*/

     this.http.post<string[]>(this.service.urlServer+'/chartsQuery/getStateWithLockdown',body)
     .subscribe( (response:string[]) => {
       this.states_and_lockdown = response;
       console.log('HOMEPAGE REPONSZEEEE', response)
       console.log('HOMEPAGE STATES_AND_LOCKDOWN', this.states_and_lockdown)
     }, error => {
       console.log('error',error.error.text)
     })


    /*query per ottenere lista delle contee*/
    this.http.post<string[]>(this.service.urlServer+'/homepage/getCounty',body)
    .subscribe( (response:string[]) => {
      this.counties = response;
    }, error => {
      console.log('error',error.error.text)
    })


    /*query per ottenere lista delle città*/
    this.http.post<string[]>(this.service.urlServer+'/homepage/getCity',body)
    .subscribe( (response:string[]) => {
      this.cities = response;
    }, error => {
      console.log('error',error.error.text)
    })

  }

  ngOnInit(): void { 

    /*Subscribe all'Observable item$ per aggiornare il valore di pagination*/
    this.service.item$.subscribe(nuovaPage => 
      this.pagination = nuovaPage
    );

    console.log('onInit', this.pagination)
  }

  /*al caricamento della componente proiezioni riceve un map con i valori di default di proiezione*/
  getProiezioniFirstTime(proj : Map<string,Proiezione>){
    this.projMap = proj;
    this.projMapQueryFrequenti = this.projMap;
    console.log('Map Checkbox in Homepage FIRST TIME [getProiezioni(proj)]',this.projMap)
  }

  /*per ogni modifica della componente proiezioni riceve un map con i valori di default di proiezione*/
  getProiezioni(proj : Map<string,Proiezione>){
    this.projMap = proj;
    console.log('Map Checkbox in Homepage [getProiezioni(proj)]',this.projMap)
  }

  getCondizione(selectedItem : string){
    this.selectedItem = selectedItem;
    console.log('Stringa Radio button in Homepage [getCondizione(selectedItem)]', this.selectedItem)
  }

  /*al caricamento della componente specializzazioni riceve un array con i valori di default di integration*/
  getSpecializzazioniFirstTime(specializzazione : Integration){
    this.specializzazioni = specializzazione;

    console.log('Homepage specializzazione first time value', this.specializzazioni)
  }

  /*per ogni modifica della componente specializzazioni riceve un array con i valori di default di integration*/
  getSpecializzazioni(specializzazione : Integration){
    this.specializzazioni = specializzazione;

    console.log('Homepage specializzazione value', this.specializzazioni)
  }

  /*al caricamento della componente specializzazioni riceve un array con i valori di default di integration*/
  getQueryFrequentiFirstTime(queryFrequenti : QueryFrequenti){
    this.queryFrequenti = queryFrequenti;

    console.log('Homepage query frequenti first time value', this.queryFrequenti)
  }

  /*per ogni modifica della componente specializzazioni riceve un array con i valori di default di query Frequenti*/
  getQueryFrequenti(queryFrequenti : QueryFrequenti){
    this.queryFrequenti = queryFrequenti;

    console.log('Homepage query frequenti  value', this.queryFrequenti)
  }

  /*La variabile pagination assume il nome (Covid-19: cases and deaths, Lockdown, Air Quality, Integration) in base alla pagina attiva*/
  changePage(name : string){

    console.log("toolbar name",name);

    this.pagination = name;  //(Covid-19: cases and deaths, Lockdown, Air Quality, Integration)

  }


  /*Calendario*/
  public isMeeting(date: Date) {
    return /10|15|20/.test(date.getDate().toString()) ? 'meeting' : '';
  }
  public isYearMeeting(date: Date) {
      return date.getMonth() % 3 ? 'meeting' : '';
  }
  public isDecadeMeeting(date: Date) {
      return date.getDate() % 2 ? 'meeting' : '';
  }
  public isCenturyMeeting(date: Date) {
      return date.getDate() % 20 ? 'meeting' : '';
  }

  /*evento che riceve dal calendario1 la data di inizio selezionata*/
  getDataInizio(data : Date){
    console.log(data)
    let day = data.getUTCDate()+1;
    let month = data.getUTCMonth();
    let year = data.getUTCFullYear();
    console.log(day,month,year);

    let date : Date = new Date(year, month, day);

    this.dataInizio = (moment(data)).format('YYYY-MM-DD');
    this.dataInizioView = (moment(data)).format('DD-MM-YYYY');

    //console.log('datainizio',this.dataInizio)
  }

  /*evento che riceve dal calendario2 la data di fine selezionata*/
  getDataFine(data : Date){
    console.log(data)
    let day = data.getUTCDate()+1;
    let month = data.getUTCMonth();
    let year = data.getUTCFullYear();
    console.log(day,month,year);

    let date : Date = new Date(year, month, day);

    this.dataFine = (moment(data)).format('YYYY-MM-DD');
    this.dataFineView = (moment(data)).format('DD-MM-YYYY');

    //console.log('datainizio',this.dataInizio)
  }

  /*al click della X rimuove la data selezionata*/
  resetDate(type : string){
    if(type=='inizio'){
      this.dataInizio = '';
      this.dataInizioView = '';
    }else{
      this.dataFine = '';
      this.dataFineView = '';
    }
  }

  /*viene richiamato al submit del form per inviare la query*/
  submitForm(form : NgForm){

    //gira finché non viene restituita una risposta e il valore 
    //while(this.queryStatus && !this.noAnswer && !this.covidAnswer)
    this.queryStatus = "in attesa";
    this.noAnswer = null;

    switch(this.pagination){
      case 'Covid-19: cases and deaths': this.formCovid(); break;
      case 'Lockdown': this.formLockdown(); break;
      case 'Air quality': this.airQualityForm(); break;
      case 'Integration': this.integrationForm(); break;
      case 'Query più frequenti': this.queryFrequentiForm(); break;
      default : console.log('dafault case in submitForm(form);'); break;
    }

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina covid: cases and deaths*/
  /*Richiamato in SubmitForm($event)*/
  formCovid(){

    let body = {
      proiezioni : HomepageComponent.mapToArray(this.projMap),
      condizioni : {
        searchBy : {
          type : this.selectedItem,
          value : this.specializzazioni.criterioDiRicerca.value
        },
        byDataInizio : this.dataInizio,
        byDataFine : this.dataFine
      },
      specializzazioni : {
        byCasiCovid : {
          start : this.specializzazioni.covid.casi.maggioreDi,
          end : this.specializzazioni.covid.casi.minoreDi
        },
        byMortiCovid : {
          start : this.specializzazioni.covid.morti.maggioreDi,
          end : this.specializzazioni.covid.morti.minoreDi
        }
      }
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/covid19',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{
        this.noAnswer = false;
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";
      
      console.log('Risposta alla chiamata su '+this.service.urlServer+'/covid19', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/covid19: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina lockdown*/
  /*Richiamato in SubmitForm($event)*/
  formLockdown(){

    let body = {
      proiezioni : HomepageComponent.mapToArray(this.projMap),
      condizioni : {
        searchBy : {
          type : this.selectedItem,
          value : this.specializzazioni.criterioDiRicerca.value
        },
        byDataInizio : this.dataInizio,
        byDataFine : this.dataFine
      },
      specializzazioni : {
        type_lockdown : this.specializzazioni.lockdown.tipo
      }
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/lockdown',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{
        this.noAnswer = false;
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";
      
      console.log('Risposta alla chiamata su '+this.service.urlServer+'/lockdown', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/lockdown: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina air quality*/
  /*Richiamato in SubmitForm($event)*/
  airQualityForm(){

    let body = {
      proiezioni : HomepageComponent.mapToArray(this.projMap),
      condizioni : {
        searchBy : {
          type : this.selectedItem,
          value : this.specializzazioni.criterioDiRicerca.value
        },
        byDataInizio : this.dataInizio,
        byDataFine : this.dataFine
      },
      specializzazioni : {
        air_quality : {
          start : this.specializzazioni.airQuality.maggioreDi,
          end : this.specializzazioni.airQuality.minoreDi
        }
      }
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/covid19',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{
        this.noAnswer = false;
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";
      console.log('Risposta alla chiamata su '+this.service.urlServer+'/covid19', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/covid19: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina integration*/
  /*Richiamato in SubmitForm($event)*/
  integrationForm(){

    let body = {
      proiezioni : HomepageComponent.mapToArray(this.projMap),
      condizioni : {
        searchBy : {
          type : this.selectedItem,
          value : this.specializzazioni.criterioDiRicerca.value
        },
        byDataInizio : this.dataInizio,
        byDataFine : this.dataFine
      },
      specializzazioni : {
        byCasiCovid : {
          start : this.specializzazioni.covid.casi.maggioreDi,
          end : this.specializzazioni.covid.casi.minoreDi
        },
        byMortiCovid : {
          start : this.specializzazioni.covid.morti.maggioreDi,
          end : this.specializzazioni.covid.morti.minoreDi
        },
        air_quality : {
          start : this.specializzazioni.airQuality.maggioreDi,
          end : this.specializzazioni.airQuality.minoreDi
        },
        type_lockdown : this.specializzazioni.lockdown.tipo
      }
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/covid19',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{
        this.noAnswer = false;
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/covid19', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/covid19: '+err)
    })
    
  }


  queryFrequentiForm(){

    switch(this.queryFrequenti.tipo_query){
      case 'Report Covid-19: casi e morti per ciascuno stato': this.casiMortiPerStatoForm(); break;
      case 'Report QoA in base alla città': this.reportQoAByCityForm(); break;
      case 'Percentuale casi Covid-19 in base alle contee di uno stato': this.percentualeCasiCovidPerStatoForm(); break;
      case 'Report QoA per stato': this.reportQoAPerStatoForm(); break;
      case 'Visualizza valore QoA medio per ciascuna città di ogni stato': this.andamentoQoAPerCittaForm(); break;
      case 'Visualizza andamento QoA pre/post lockdown': this.andamentoQoALockdownForm(); break;
      case 'Visualizza l\'andamento dei contagi pre/post lockdown': this.andamentoContagiLockdownForm(); break;
    }

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Report Covid-19: casi e morti per ciascuno stato */
  /*Richiamato in SubmitForm($event)*/
  casiMortiPerStatoForm(){

    let body = {
      state : this.queryFrequenti.stato1,
      byDataInizio : this.dataInizio,
      byDataFine : this.dataFine
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getCasesAndDeaths',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : false});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : true});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : true});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : true});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : false});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : false});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }
        

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getCasesAndDeaths', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getCasesAndDeaths: '+err)
    })


  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Report qualità dell'aria per ciascuna città */
  /*Richiamato in SubmitForm($event)*/
  reportQoAByCityForm(){

    let body = {
      city : this.queryFrequenti.citta_selezionata,
      byDataInizio : this.dataInizio,
      byDataFine : this.dataFine
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getReportQoAByCity',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : true});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : true});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : false});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : false});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : true});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : true});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }
        

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getReportQoAByCity', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getReportQoAByCity: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Percentuale casi per contee di uno stato */
  /*Richiamato in SubmitForm($event)*/
  percentualeCasiCovidPerStatoForm(){

    let body = {
      state : this.queryFrequenti.stato1
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getPercentCasesByState',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : true});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : false});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : true});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : false});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : false});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : false});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }
        
      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getPercentCasesByState', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getPercentCasesByState: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Report QoA per stato */
  /*Richiamato in SubmitForm($event)*/
  reportQoAPerStatoForm(){

    let body = {
      state : this.queryFrequenti.stato1,
      byDataInizio : this.dataInizio,
      byDataFine : this.dataFine
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getReportAirAverage',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : true});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : false});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : false});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : false});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : true});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : true});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getReportAirAverage', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getReportAirAverage: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Report QoA per ciascuna città di ogni stato*/
  /*Richiamato in SubmitForm($event)*/
  andamentoQoAPerCittaForm(){
   
    let body = {}

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getAvgQoACity',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : true});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : false});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : false});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : false});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : true});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : true});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }
        
      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getAvgQoACity', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getAvgQoACity: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Report QoA pre/post lockdown*/
  /*Richiamato in SubmitForm($event)*/
  andamentoQoALockdownForm(){

    console.log('query frequenti', this.queryFrequenti);
    
    let body = {
      state : this.queryFrequenti.stato1,
      county : this.queryFrequenti?.lockdown_selezionato.contea,
      date : this.queryFrequenti?.lockdown_selezionato.data,
      lockdown : this.queryFrequenti?.lockdown_selezionato.tipo
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getReportAirQuality',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : true});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : true});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : false});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : false});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : false});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : true});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getReportAirQuality', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getReportAirQuality: '+err)
    })

  }

  /*Invia informazioni e ottiene risposte dal server quando viene inviato un form nella pagina queryFrequenti con query Report casi e morti pre/post lockdown*/
  /*Richiamato in SubmitForm($event)*/
  andamentoContagiLockdownForm(){
    console.log('query frequenti', this.queryFrequenti);
    
    let body = {
      state : this.queryFrequenti.stato1,
      county : this.queryFrequenti?.lockdown_selezionato.contea,
      date : this.queryFrequenti?.lockdown_selezionato.data,
      lockdown : this.queryFrequenti?.lockdown_selezionato.tipo
    }

    console.log('BODY',body)

    this.http.post(this.service.urlServer+'/chartsQuery/getReportCases',body).subscribe(result => {

      if(result == null || result == []){
        this.noAnswer = true;
      }else{  //se esiste una risposta
        this.noAnswer = false;

        //setta la proiezione per la griglia
        this.projMapQueryFrequenti.set('_id',{field: '_id',checked : false});
        this.projMapQueryFrequenti.set('state',{field: 'state',checked : true});
        this.projMapQueryFrequenti.set('county',{field: 'county',checked : true});
        this.projMapQueryFrequenti.set('date',{field: 'date',checked : true});
        this.projMapQueryFrequenti.set('cases',{field: 'cases',checked : true});
        this.projMapQueryFrequenti.set('deaths',{field: 'deaths',checked : true});
        this.projMapQueryFrequenti.set('city',{field: 'city',checked : false});
        this.projMapQueryFrequenti.set('cities_air_quality',{field: 'cities_air_quality',checked : false});
        this.projMapQueryFrequenti.set('lockdown',{field: 'lockdown',checked : false});
      }

      /*Gestione item da visualizzare UI*/
      this.answer = result;
      this.queryStatus = "completata";

      console.log('Risposta alla chiamata su '+this.service.urlServer+'/chartsQuery/getReportCases', this.answer)
    }, err => {
       /*Gestione item da visualizzare UI*/
      this.queryStatus = "completata";
      this.noAnswer = true;
      console.log('Si è verificato un errore in '+this.service.urlServer+'/chartsQuery/getReportCases: '+err)
    })
  }

  /*Converte un map in array*/
  static mapToArray(map : Map<any,any>) {

    let array : Proiezione[] = [];

    map.forEach( item => {
      array.push(item)
    })

    return array;
 
  }

 

}
