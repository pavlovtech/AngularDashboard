import { Component, OnInit, Input } from '@angular/core';
import { GridsterConfig, GridType, CompactType, DisplayGrid } from 'angular-gridster2';
import { DashboardCard } from './models/dashboard-card.model';
import { ChartWidgetComponent } from './widgets/chart-widget/chart-widget.component';
import { WidgetType } from './models/widget-type.model';

@Component({
  selector: 'lib-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input()
  widgetTypes: WidgetType[] = [{
    componentName: 'ChartWidgetComponent',
    component: ChartWidgetComponent,
    widgetSettings: {
        widgetTitle: 'Chart'
    },
    description: 'Description',
    module: 'SOC',
    thumbnailUrl: 'assets/images/widget-thumbnails/chart.png',
    placement: {
        x: 0,
        y: 0,
        rows: 5,
        cols: 2,
        minItemRows: 2,
        maxItemRows: 10,
        minItemCols: 2,
        maxItemCols: 3
    }
  }];

  widgetMenuOpened = false;

  constructor() {
  }

  widgetEvents = {
    widgetRemoved: (card: DashboardCard) => {
      const index = this.cards.indexOf(card);
      if (index >= 0) {
        this.cards.splice(index, 1);
      }
    }
  };

  options: GridsterConfig;

  cards: DashboardCard[] = [];

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
    this.cards.push(new DashboardCard({
      widgetSettings: {
        widgetTitle: 'Chart example',
      },
      component: ChartWidgetComponent,
      componentName: 'ChartWidgetComponent',
      placement: {
        y: 0,
        x: 0,
        rows: 4,
        cols: 4,
        minItemRows: 3,
        maxItemRows: 10,
        minItemCols: 3,
        maxItemCols: 10
      }
    }));
  }

  cleanDashboard() {
    this.cards = [];
  }

  showWidgetsPanel() {
    this.widgetMenuOpened = true;
  }

  hideWidgetsPanel() {
    this.widgetMenuOpened = false;
  }

  onWidgetTypeClicked(widgetType: WidgetType) {
    const card = this.CreateCard(0, 0, widgetType);
    this.addCard(card);
  }

  private CreateCard(x: number, y: number, widgetType: WidgetType) {
    const card = new DashboardCard({
        component: widgetType.component,
        componentName: widgetType.componentName,
        widgetSettings: JSON.parse(JSON.stringify(widgetType.widgetSettings)),
        placement: JSON.parse(JSON.stringify(widgetType.placement))
    });

    card.placement.x = x;
    card.placement.y = y;

    return card;
  }

  private currentDraggableWidgetType: WidgetType;

  addCard(card: DashboardCard): void {
    this.cards.push(card);
  }

  onDragstart(widgetType: WidgetType) {
    this.changedOptions();

    this.currentDraggableWidgetType = widgetType;
  }
}
