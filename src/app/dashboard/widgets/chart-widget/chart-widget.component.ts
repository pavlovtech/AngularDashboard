import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { DashboardCard } from '../../models/dashboard-card';

@Component({
    selector: 'app-chart-widget',
    templateUrl: './chart-widget.component.html',
    styleUrls: ['./chart-widget.component.scss']
})
export class ChartWidgetComponent implements OnInit  {

    chart: Chart;
    card: DashboardCard;

    ngOnInit() {
        this.populateChart();
    }

    public populateChart() {
        this.chart = new Chart({
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
        });
    }
}
