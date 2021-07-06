import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartExampleComponent } from './features/chart-example/chart-example.component';
import { GridExampleComponent } from './features/grid-example/grid-example.component';
import { HomepageComponent } from './features/homepage/homepage.component';

const routes: Routes = [
  { path:'homepage', component: HomepageComponent },
  { path:'gridExample', component: GridExampleComponent },
  { path:'chartExample', component: ChartExampleComponent },
  { path:'**', redirectTo:'/homepage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
