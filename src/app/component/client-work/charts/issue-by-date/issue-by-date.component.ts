import { Component, OnInit } from '@angular/core';
import { DateService } from './../../../../service/date.service'
import { LineChartConfig } from './../../../../model/google-charts/line-chart-config'
import { LineChartService } from './../../../../service/google-charts/line-chart.service'

@Component({
  selector: 'app-issue-by-date',
  templateUrl: './issue-by-date.component.html',
  styleUrls: ['./issue-by-date.component.css']
})
export class IssueByDateComponent implements OnInit {
  data: any[];
  config: LineChartConfig;
  elementId: string;

  constructor(private dateService: DateService,
    private chartService: LineChartService) { 
  }

  ngOnInit() {

    this.data = [
      ['Date', 'Status Count'],
      [this.dateService.getDateDaysOffset(-7), Math.random() * 9], 
      [this.dateService.getDateDaysOffset(-6), Math.random() * 8],
      [this.dateService.getDateDaysOffset(-5), Math.random() * 8],
      [this.dateService.getDateDaysOffset(-4), Math.random() * 7],
      [this.dateService.getDateDaysOffset(-3), Math.random() * 7],
      [this.dateService.getDateDaysOffset(-2), Math.random() * 7],
      [this.dateService.getDateDaysOffset(-1), Math.random() * 7],
      [this.dateService.getDate(), Math.random() * 3]
    ];

    this.config = new LineChartConfig("Issues by date", this.dateService.getDate() + ' - ' + this.dateService.getDateDaysOffset(-7), "");
    this.elementId = 'issueByDate';

    this.chartService.BuildLineChart(this.elementId, this.data, this.config);
  }
}
