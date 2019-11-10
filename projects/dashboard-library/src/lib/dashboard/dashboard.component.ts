import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridType, CompactType, DisplayGrid } from 'angular-gridster2';
import { DashboardCard } from './models/dashboard-card.model';
import { ChartWidgetComponent } from './widgets/chart-widget/chart-widget.component';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() {
  }

  widgetEvents = {
    widgetRemoved: (card: DashboardCard) => {
      const index = this.items.indexOf(card);
      if (index >= 0) {
        this.items.splice(index, 1);
      }
    },
  };

  options: GridsterConfig;

  items: DashboardCard[] = [];

  ngOnInit() {
    this.options = {
      gridType: GridType.VerticalFixed,
      fixedRowHeight: 50,
      compactType: CompactType.None,
      minCols: 10,
      maxCols: 10,
      minRows: 12,
      maxRows: 50,
      displayGrid: DisplayGrid.Always,
      pushItems: true,
      draggable: {
          enabled: true
      },
      resizable: {
          enabled: true
      }
    };
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  addItem() {
    this.items.push(new DashboardCard({
      component: ChartWidgetComponent,
      y: 0,
      x: 0,
      rows: 4,
      cols: 4,
      minItemRows: 3,
      maxItemRows: 10,
      minItemCols: 3,
      maxItemCols: 10
    }));
  }

  cleanDashboard() {
    this.items = [];
  }
}
