import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Proiezione } from 'src/app/interface/proiezioni';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  pagination : string = 'Covid-19'; /*Nome del pagination attivo*/
  
  projMap = new Map(); /*valori relativi alle proiezioni*/

  selectedItem : string = 'Stato'; //valore di default


  constructor() { }

  ngOnInit(): void {}

  /*La variabile pagination assume il nome (Anagrafica, Provenienza) in base alla pagina attiva*/
  changePage($event, name : string){

    console.log(name);

    this.pagination = name;  //(Anagrafica, Provenienza)
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
    console.log('lo forme', form.form.value)
  }

  getProiezioni(proj : Map<string,Proiezione>){
    this.projMap = proj;
    console.log('Map Checkbox in Homepage [getProiezioni(proj)]',this.projMap)
  }

  getCondizione(selectedItem : string){
    this.selectedItem = selectedItem;
    console.log('Stringa Radio button in Homepage [getCondizione(selectedItem)]', this.selectedItem)
  }

}
