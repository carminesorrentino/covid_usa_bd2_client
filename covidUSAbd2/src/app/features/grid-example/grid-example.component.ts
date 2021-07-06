import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-example',
  templateUrl: './grid-example.component.html',
  styleUrls: ['./grid-example.component.css']
})
export class GridExampleComponent implements OnInit {

  data = [
    {
      'nome' : 'Carmine',
      'cognome' : 'Sorrentino'
    },
    {
      'nome' : 'Cane',
      'cognome' : 'Sorrentino'
    },
    {
      'nome' : 'Alessandro',
      'cognome' : 'Laoperaodu'
    },
    {
      'nome' : 'Alfredo',
      'cognome' : 'Raimondo'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
