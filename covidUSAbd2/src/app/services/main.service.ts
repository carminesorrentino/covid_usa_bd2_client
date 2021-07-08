import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  pagination : string;

  constructor() { 
    this.pagination = 'Covid-19: cases and deaths'
  }

}
