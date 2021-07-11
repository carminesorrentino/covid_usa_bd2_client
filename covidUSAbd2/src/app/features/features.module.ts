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
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



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
    SharedModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    HomepageComponent,
    GridExampleComponent,
    ChartExampleComponent
  ]
})
export class FeaturesModule { }
