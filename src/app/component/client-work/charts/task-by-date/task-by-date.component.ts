import { Component, OnInit } from '@angular/core';
import { DateService } from './../../../../service/date.service'
import { LineChartConfig } from './../../../../model/google-charts/line-chart-config'
import { LineChartService } from './../../../../service/google-charts/line-chart.service'

@Component({
  selector: 'app-task-by-date',
  templateUrl: './task-by-date.component.html',
  styleUrls: ['./task-by-date.component.css']
})
export class TaskByDateComponent implements OnInit {
  data: any[];
  config: LineChartConfig;
  elementId: string;

  constructor(private dateService: DateService,
    private chartService: LineChartService) { 
  }

  ngOnInit() {

    this.data = [
      ['Date', 'Status Count'],
      [this.dateService.getDateDaysOffset(-7), Math.random() * 100], 
      [this.dateService.getDateDaysOffset(-6), Math.random() * 100],
      [this.dateService.getDateDaysOffset(-5), Math.random() * 100],
      [this.dateService.getDateDaysOffset(-4), Math.random() * 100],
      [this.dateService.getDateDaysOffset(-3), Math.random() * 100],
      [this.dateService.getDateDaysOffset(-2), Math.random() * 100],
      [this.dateService.getDateDaysOffset(-1), Math.random() * 100],
      [this.dateService.getDate(), Math.random() * 100]
    ];

    this.config = new LineChartConfig("Tasks by date", this.dateService.getDate() + ' - ' + this.dateService.getDateDaysOffset(-7), "");
    this.elementId = 'taskByDate';

    this.chartService.BuildLineChart(this.elementId, this.data, this.config);
  }

}
