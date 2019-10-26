import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType } from 'angular-gridster2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor() { }

  options: GridsterConfig;
  items: Array<GridsterItem>;



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
      { cols: 2, rows: 1, y: 0, x: 0 },
      { cols: 2, rows: 1, y: 0, x: 2 }
    ];
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  removeItem(item: GridsterItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  addItem() {
    this.items.push({} as GridsterItem);
  }
}
