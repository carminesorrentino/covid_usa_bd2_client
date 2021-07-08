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
  }

  currentPage(pagination : string){
    console.log(pagination);
    this.pagination = pagination;
  }

}
