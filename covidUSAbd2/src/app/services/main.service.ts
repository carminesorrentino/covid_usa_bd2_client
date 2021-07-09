import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';  //Observable

@Injectable({
  providedIn: 'root'
})
export class MainService {

  /*Inizializza un nuovo valore a null*/
  private pagination: BehaviorSubject<string> = new BehaviorSubject(null);

  /*Definisce un Observable sulla variabile pagination in modo tale che ogni modifica
    su pagination possa essere ricevuta dai subscribers*/
  item$ = this.pagination.asObservable();

  /*Modifica il valore della variabile pagination (richiamata in navbar.component.ts*/
  setPagination(pagination_item: string) {
    this.pagination.next(pagination_item);
  }

}
