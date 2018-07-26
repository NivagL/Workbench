import { Component, OnInit } from '@angular/core';
import { ColumnChartConfig } from './../../../../model/google-charts/column-chart-config'
import { ColumnChartService } from './../../../../service/google-charts/column-chart.service'

@Component({
  selector: 'app-task-by-client',
  templateUrl: './task-by-client.component.html',
  styleUrls: ['./task-by-client.component.css']
})
export class TaskByClientComponent implements OnInit {
  data: any[];
  config: ColumnChartConfig;
  elementId: string;

  constructor(private chartService: ColumnChartService) { 
  }

  ngOnInit() {

    this.data = [
      ['Client', 'Task Count'],
      ["Vector", Math.random() * 1000], 
      ["WE", Math.random() * 600], 
      ["Whangarei", Math.random() * 300], 
    ];

    this.config = new ColumnChartConfig("Work by client", "Outstanding work items", "");
    this.elementId = 'taskByClient';

    this.chartService.BuildColumnChart(this.elementId, this.data, this.config);
  }

}
