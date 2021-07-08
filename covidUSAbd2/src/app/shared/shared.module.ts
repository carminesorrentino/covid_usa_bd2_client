import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProiezioniComponent } from './proiezioni/proiezioni.component';
import { FormsModule } from '@angular/forms';
import { CondizioniComponent } from './condizioni/condizioni.component';



@NgModule({
  declarations: [
    ProiezioniComponent,
    CondizioniComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProiezioniComponent,
    CondizioniComponent
  ]
})
export class SharedModule { }
