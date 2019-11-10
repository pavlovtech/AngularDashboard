import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.component';
import { DynamicComponentDirective } from './directives/dynamic-component.directive';
import { ChartWidgetComponent } from './widgets/chart-widget/chart-widget.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { GridsterModule } from 'angular-gridster2';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    DashboardComponent,
    DynamicComponentDirective,
    ChartWidgetComponent
  ],
  imports: [
    CommonModule,
    HighchartsChartModule,
    GridsterModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule
  ],
  exports: [DashboardComponent],
  entryComponents: [
    ChartWidgetComponent
  ]
})
export class DashboardModule { }
