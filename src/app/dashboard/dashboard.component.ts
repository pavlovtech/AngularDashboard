import { Component, OnInit } from '@angular/core';
import { GridsterConfig, GridsterItem, GridType, CompactType, GridsterComponentInterface, GridsterItemComponent } from 'angular-gridster2';
import { DashboardCard } from './models/dashboard-card';
import { ChartWidgetComponent } from './widgets/chart-widget/chart-widget.component';
import { CardResizeService } from './services/card-resize.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public resizeService: CardResizeService) {
  }

  options: GridsterConfig;

  items: DashboardCard[];

  static updateSize() {
    window.dispatchEvent(new Event('resize'));
  }

  static gridSizeChanged(gridster: GridsterComponentInterface) {
    console.log('gridSizeChanged', gridster);
    //DashboardComponent.updateSize();
  }

  ngOnInit() {
    this.items = [
      new DashboardCard({ component: ChartWidgetComponent, y: 0, x: 0, cols: 2, rows: 2 })
    ];

    this.options = {
      gridType: GridType.Fit,
      compactType: CompactType.None,
      pushItems: true,
      draggable: {
        enabled: true
      },
      resizable: {
        enabled: true
      },
      itemChangeCallback: this.itemChange,
      itemResizeCallback: this.itemResize,
      gridSizeChangedCallback: DashboardComponent.gridSizeChanged
    };
  }

  itemChange = (item: DashboardCard, itemComponent: GridsterItemComponent) =>  {
    //console.log('itemChanged', item, itemComponent);
    this.resizeService.resize(item);
    //DashboardComponent.updateSize();
  }

  itemResize = (item: DashboardCard, itemComponent: GridsterItemComponent) => {
    //console.log('itemResize', item, itemComponent);
    this.resizeService.resize(item);
    //DashboardComponent.updateSize();
  }

  changedOptions() {
    this.options.api.optionsChanged();
  }

  addItem() {
    this.items.push(new DashboardCard({ component: ChartWidgetComponent, y: 0, x: 0, cols: 2, rows: 2 }));
  }
}
