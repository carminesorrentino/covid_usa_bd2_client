import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Integration } from 'src/app/interface/integration';
import { Proiezione } from 'src/app/interface/proiezioni';
import { MainService } from 'src/app/services/main.service';

import * as moment from 'moment';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  pagination : string; /*Nome del pagination attivo*/
  
  projMap = new Map(); /*valori relativi alle proiezioni*/

  selectedItem : string = 'Stato'; //valore di default

  dataInizio : string;  //dataInizio

  dataFine : string; //dataFine

  dataInizioView : string;
  dataFineView : string;

  specializzazioni : Integration;

  constructor(public service : MainService) { 
    console.log('pagination homepage', this.pagination)
  }

  ngOnInit(): void { 

    /*Subscribe all'Observable item$ per aggiornare il valore di pagination*/
    this.service.item$.subscribe(nuovaPage => 
      this.pagination = nuovaPage
    );

    console.log('onInit', this.pagination)
  }

  getProiezioni(proj : Map<string,Proiezione>){
    this.projMap = proj;
    console.log('Map Checkbox in Homepage [getProiezioni(proj)]',this.projMap)
  }

  getCondizione(selectedItem : string){
    this.selectedItem = selectedItem;
    console.log('Stringa Radio button in Homepage [getCondizione(selectedItem)]', this.selectedItem)
  }

  getSpecializzazioni(specializzazione : Integration){
    this.specializzazioni = specializzazione;

    console.log('Homepage specializzazione value', this.specializzazioni)
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

  resetDate(type : string){
    if(type=='inizio'){
      this.dataInizio = '';
      this.dataInizioView = '';
    }else{
      this.dataFine = '';
      this.dataFineView = '';
    }
  }


  submitForm(form : NgForm){
    console.log('lo forme', form)
  }

 

}
