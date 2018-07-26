import { Component, Input, OnInit } from '@angular/core';

import { PieChartService } from '../../../service/google-charts/pie-chart.service';
import { PieChartConfig } from '../../../model/google-charts/pie-chart-config';

declare var google: any;

@Component({
    selector: 'app-pie-chart',
    templateUrl: './pie-chart.component.html',
    styleUrls: ['./pie-chart.component.css']
  })
export class PieChartComponent implements OnInit {

    @Input() data: any[];
    @Input() config: PieChartConfig;
    @Input() elementId: string;

    constructor(private chartService: PieChartService) {}

    ngOnInit(): void {
        this.chartService.BuildPieChart(this.elementId, this.data, this.config); 
    }
}