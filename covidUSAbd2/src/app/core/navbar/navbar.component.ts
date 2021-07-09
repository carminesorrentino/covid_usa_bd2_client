import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  pagination : string = 'Covid-19: cases and deaths'

  constructor(public service : MainService) { }

  ngOnInit(): void {
    this.service.setPagination(this.pagination);
  }

  currentPage(pagination : string){
    console.log(pagination);
    this.pagination = pagination;
    this.service.setPagination(pagination);  /*Invoca il metodo nel service per aggiornare 
                                                il valore della pagina corrente*/
  }

}
