import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { DashboardCard } from './models/dashboard-card';
import { ChartWidgetComponent } from './widgets/chart-widget/chart-widget.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  options: GridsterConfig;
  items: DashboardCard[];

  ngOnInit() {
    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      }
    };

    this.items = [
      new DashboardCard({ component: ChartWidgetComponent, y: 0, x: 0, cols: 2, rows: 2 })
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  addItem() {
    this.items.push({} as DashboardCard);
  }
}
