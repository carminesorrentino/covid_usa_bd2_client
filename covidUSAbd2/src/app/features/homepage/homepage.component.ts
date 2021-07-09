import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proiezione } from 'src/app/interface/proiezioni';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  pagination : string; /*Nome del pagination attivo*/
  
  projMap = new Map(); /*valori relativi alle proiezioni*/

  selectedItem : string = 'Stato'; //valore di default

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


  submitForm(form : NgForm){
    console.log('lo forme', form)
  }

 

}
