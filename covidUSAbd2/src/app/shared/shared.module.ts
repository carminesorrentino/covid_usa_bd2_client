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
import { QueryFrequentiComponent } from './query-frequenti/query-frequenti.component';
import { HttpClientModule } from '@angular/common/http';
import { GridQueryFrequentiComponent } from './grid-query-frequenti/grid-query-frequenti.component';
import { ChartQoaStateComponent } from './chart-qoa-state/chart-qoa-state.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartReportQoaLockdownComponent } from './chart-report-qoa-lockdown/chart-report-qoa-lockdown.component';
import { ChartAndamentoContagiComponent } from './chart-andamento-contagi/chart-andamento-contagi.component';
import { ChartPiePercentualiConteeStatoComponent } from './chart-pie-percentuali-contee-stato/chart-pie-percentuali-contee-stato.component';



@NgModule({
  declarations: [
    ProiezioniComponent,
    CondizioniComponent,
    SpecializzazioniComponent,
    CalendarComponent,
    GridCovidComponent,
    ChartCovidComponent,
    QueryFrequentiComponent,
    GridQueryFrequentiComponent,
    ChartQoaStateComponent,
    ChartReportQoaLockdownComponent,
    ChartAndamentoContagiComponent,
    ChartPiePercentualiConteeStatoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    DxTemplateModule,
    HttpClientModule,
    HighchartsChartModule
  ],
  exports: [
    ProiezioniComponent,
    CondizioniComponent,
    SpecializzazioniComponent,
    CalendarComponent,
    ChartCovidComponent,
    GridCovidComponent,
    QueryFrequentiComponent,
    GridQueryFrequentiComponent,
    ChartQoaStateComponent,
    ChartReportQoaLockdownComponent,
    ChartAndamentoContagiComponent,
    ChartPiePercentualiConteeStatoComponent
  ]
})
export class SharedModule { }
