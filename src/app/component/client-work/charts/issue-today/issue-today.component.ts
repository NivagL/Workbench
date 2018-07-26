import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from './../../../../model/google-charts/pie-chart-config'
import { PieChartService } from './../../../../service/google-charts/pie-chart.service'

@Component({
  selector: 'app-issue-today',
  templateUrl: './issue-today.component.html',
  styleUrls: ['./issue-today.component.css']
})
export class IssueTodayComponent implements OnInit {
  data: any[];
  config: PieChartConfig;
  elementId: string;

  constructor(private chartService: PieChartService) { }

  ngOnInit() {
    this.data = [
      ['State', 'Count'],
      ['Missed SLA', Math.random() * 10], 
      ['Dispatch Issues', Math.random() * 10],
      ['No Job Information', Math.random() * 10],
    ];

    this.config = new PieChartConfig("Issues today", 0.4);
    this.elementId = 'issueToday';

    this.chartService.BuildPieChart(this.elementId, this.data, this.config);
  }
}
