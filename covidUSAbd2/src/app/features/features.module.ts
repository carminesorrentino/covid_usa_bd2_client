import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { GridExampleComponent } from './grid-example/grid-example.component';
import { DxDataGridModule } from 'devextreme-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartExampleComponent } from './chart-example/chart-example.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IntlModule } from '@progress/kendo-angular-intl';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ProiezioniComponent } from '../shared/proiezioni/proiezioni.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HomepageComponent,
    GridExampleComponent,
    ChartExampleComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    HighchartsChartModule,
    BrowserAnimationsModule,
    IntlModule,
    LabelModule,
    DateInputsModule,
    SharedModule
  ],
  exports: [
    HomepageComponent,
    GridExampleComponent,
    ChartExampleComponent
  ]
})
export class FeaturesModule { }
