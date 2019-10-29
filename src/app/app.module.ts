import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GridsterModule } from 'angular-gridster2';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DynamicComponentDirective } from './dashboard/directives/dynamic-component.directive';
import { ChartWidgetComponent } from './dashboard/widgets/chart-widget/chart-widget.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DynamicComponentDirective,
    ChartWidgetComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    GridsterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    ChartWidgetComponent
  ]
})
export class AppModule { }
