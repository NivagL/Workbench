import { Component, Input, OnInit } from '@angular/core';

import { LineChartService } from '../../../service/google-charts/line-chart.service';
import { LineChartConfig } from '../../../model/google-charts/line-chart-config';

declare var google: any;

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input() data: any[];
  @Input() config: LineChartConfig;
  @Input() elementId: string;

  constructor(private chartService: LineChartService) {}

  ngOnInit(): void {
      this.chartService.BuildLineChart(this.elementId, this.data, this.config); 
  }

}
