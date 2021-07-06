import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { GridExampleComponent } from './grid-example/grid-example.component';
import { DxDataGridModule } from 'devextreme-angular';
import { HighchartsChartModule } from 'highcharts-angular';
import { ChartExampleComponent } from './chart-example/chart-example.component';



@NgModule({
  declarations: [
    HomepageComponent,
    GridExampleComponent,
    ChartExampleComponent
  ],
  imports: [
    CommonModule,
    DxDataGridModule,
    HighchartsChartModule
  ],
  exports: [
    HomepageComponent,
    GridExampleComponent,
    ChartExampleComponent
  ]
})
export class FeaturesModule { }
