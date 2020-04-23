import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FusionChartsModule } from "angular-fusioncharts";


import * as FusionCharts from "fusioncharts";
import * as charts from "fusioncharts/fusioncharts.charts";
import * as FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";
import { FusionComponent } from './Components/fusion/fusion.component';
import { ChartsJsComponent } from './Components/charts-js/charts-js.component';
import { TryComponent } from './Components/try/try.component';
import { RouterModule, Routes } from '@angular/router';
import { Ng2ChartsComponent } from './Components/ng2-charts/ng2-charts.component';

FusionChartsModule.fcRoot(FusionCharts, charts, FusionTheme);

const appRoutes: Routes=
[
  {path: 'fusion',component:FusionComponent}, 
  {path:'chartsJs', component: ChartsJsComponent},
  {path:'ng2-charts', component:Ng2ChartsComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    FusionComponent,
    ChartsJsComponent,
    TryComponent,
    Ng2ChartsComponent
  ],
  imports: [
    BrowserModule, FusionChartsModule,
    AppRoutingModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
