import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  pagination : string = 'Covid-19'; /*Nome del pagination attivo*/

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

}
