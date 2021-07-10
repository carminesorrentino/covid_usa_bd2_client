import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProiezioniComponent } from './proiezioni/proiezioni.component';
import { FormsModule } from '@angular/forms';
import { CondizioniComponent } from './condizioni/condizioni.component';
import { SpecializzazioniComponent } from './specializzazioni/specializzazioni.component';
import { CalendarComponent } from './calendar/calendar.component';



@NgModule({
  declarations: [
    ProiezioniComponent,
    CondizioniComponent,
    SpecializzazioniComponent,
    CalendarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProiezioniComponent,
    CondizioniComponent,
    SpecializzazioniComponent,
    CalendarComponent
  ]
})
export class SharedModule { }
