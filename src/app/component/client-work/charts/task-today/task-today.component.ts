import { Component, OnInit } from '@angular/core';
import { PieChartConfig } from './../../../../model/google-charts/pie-chart-config'
import { PieChartService } from './../../../../service/google-charts/pie-chart.service'

@Component({
  selector: 'app-task-today',
  templateUrl: './task-today.component.html',
  styleUrls: ['./task-today.component.css']
})
export class TaskTodayComponent implements OnInit {
  data: any[];
  config: PieChartConfig;
  elementId: string;

  constructor(private chartService: PieChartService) { }

  ngOnInit() {
    this.data = [
      ['State', 'Status Count'],
      ['Received', Math.random() * 100], 
      ['Scheduled', Math.random() * 100],
      ['Dispacthed', Math.random() * 100],
      ['Accepted', Math.random() * 100],
      ['Rejected', Math.random() * 5],
      ['Travelling', Math.random() * 80],
      ['Onsite', Math.random() * 80],
      ['Cancelled', Math.random() * 2],
      ['FieldComplete', Math.random() * 75],
      ['FieldIncomplete', Math.random() * 25],
      ['QA', Math.random() * 80],
      ['GISUpdate', Math.random() * 30],
      ['Billable', Math.random() * 90],
      ['Disputed', Math.random() * 5],
    ];

    this.config = new PieChartConfig("Tasks today", 0.4);
    this.elementId = 'taskToday';

    this.chartService.BuildPieChart(this.elementId, this.data, this.config);
  }

}
