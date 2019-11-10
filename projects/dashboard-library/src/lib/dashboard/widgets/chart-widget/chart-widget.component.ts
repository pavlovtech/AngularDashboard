import { Component, DoCheck, Output, EventEmitter } from '@angular/core';
import { DashboardCard } from '../../models/dashboard-card.model';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'lib-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements DoCheck {

  @Output()
  widgetRemoved = new EventEmitter<DashboardCard>();

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'area'
    },
    title: {
      text: 'Chart with negative values'
    },
    xAxis: {
      categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    credits: {
      enabled: false
    },
    series: [{
      name: 'John',
      type: undefined,
      data: [5, 3, 4, 7, 2]
    },
    {
      name: 'Jane',
      type: undefined,
      data: [2, -2, -3, 2, 1]
    },
    {
      name: 'Joe',
      type: undefined,
      data: [3, 4, 4, -2, 5]
    }]
  };

  chart: Highcharts.Chart;
  card: DashboardCard;


  onWidgetRemoved() {
    this.widgetRemoved.emit(this.card);
  }

  ngDoCheck() {
    this.resize();
  }

  resize() {
    if (this.chart) {
      this.chart.reflow();
    }
  }

  onChartInstanceReceived(chart: Highcharts.Chart) {
    this.chart = chart;
  }
}
