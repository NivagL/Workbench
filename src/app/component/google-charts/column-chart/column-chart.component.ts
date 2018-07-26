import { Component, Input, OnInit } from '@angular/core';

import { ColumnChartService } from '../../../service/google-charts/column-chart.service';
import { ColumnChartConfig } from '../../../model/google-charts/column-chart-config';

declare var google: any;

@Component({
  selector: 'app-column-chart',
  templateUrl: './column-chart.component.html',
  styleUrls: ['./column-chart.component.css']
})
export class ColumnChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: ColumnChartConfig;
  @Input() elementId: string;

  constructor(private chartService: ColumnChartService) {}

  ngOnInit(): void {
      this.chartService.BuildColumnChart(this.elementId, this.data, this.config); 
  }

}
