import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { DashboardCard } from '../../models/dashboard-card';
import * as Highcharts from 'highcharts';
import { CardResizeService } from '../../services/card-resize.service';
import { from, of } from 'rxjs';
import { delay } from 'rxjs/internal/operators';
import { concatMap } from 'rxjs/internal/operators';

@Component({
  selector: 'app-chart-widget',
  templateUrl: './chart-widget.component.html',
  styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent {

  constructor(public resizeService: CardResizeService) {
    resizeService.dashboardCardResize$
      .pipe(
        concatMap(item => of(item).pipe(delay(100)))
      ).subscribe(card => {
        if (card.cardId === this.card.cardId) {
          this.resize();
        }
      });
  }

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

  resize() {
    if (this.chart) {
      this.chart.reflow();
    }
  }

  onChartInstanceReceived(chart: Highcharts.Chart) {
    this.chart = chart;
  }
}
