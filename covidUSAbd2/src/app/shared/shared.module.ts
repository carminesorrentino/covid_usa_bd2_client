import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProiezioniComponent } from './proiezioni/proiezioni.component';
import { FormsModule } from '@angular/forms';
import { CondizioniComponent } from './condizioni/condizioni.component';
import { SpecializzazioniComponent } from './specializzazioni/specializzazioni.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GridCovidComponent } from './grid-covid/grid-covid.component';
import { ChartCovidComponent } from './chart-covid/chart-covid.component';
import { DxDataGridModule, DxTemplateModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    ProiezioniComponent,
    CondizioniComponent,
    SpecializzazioniComponent,
    CalendarComponent,
    GridCovidComponent,
    ChartCovidComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxTemplateModule
  ],
  exports: [
    ProiezioniComponent,
    CondizioniComponent,
    SpecializzazioniComponent,
    CalendarComponent,
    ChartCovidComponent,
    GridCovidComponent
  ]
})
export class SharedModule { }
