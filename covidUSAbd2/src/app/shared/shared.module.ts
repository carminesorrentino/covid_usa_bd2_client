import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProiezioniComponent } from './proiezioni/proiezioni.component';



@NgModule({
  declarations: [
    ProiezioniComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ProiezioniComponent
  ]
})
export class SharedModule { }
