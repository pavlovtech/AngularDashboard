import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';
import { DashboardCard } from './models/dashboard-card';

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
      gridType: GridType.Fixed,
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
      new DashboardCard({ component: null, y: 0, x: 0, cols: 2, rows: 1 })
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  addItem() {
    this.items.push({} as DashboardCard);
  }
}
