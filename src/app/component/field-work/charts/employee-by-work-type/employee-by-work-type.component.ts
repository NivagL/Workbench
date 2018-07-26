import { Component, OnInit } from '@angular/core';
import { ColumnChartConfig } from './../../../../model/google-charts/column-chart-config'
import { ColumnChartService } from './../../../../service/google-charts/column-chart.service'

@Component({
  selector: 'app-employee-by-work-type',
  templateUrl: './employee-by-work-type.component.html',
  styleUrls: ['./employee-by-work-type.component.css']
})
export class EmployeeByWorkTypeComponent implements OnInit {
  data: any[];
  config: ColumnChartConfig;
  elementId: string;

  constructor(private chartService: ColumnChartService) { }

  ngOnInit() {
    this.data = [
      ['Employees', 'Count'],
      ["RM", Math.random() * 200], 
      ["PM", Math.random() * 25], 
      ["CM", Math.random() * 250], 
      ["AR", Math.random() * 100], 
      ["Capital", Math.random() * 50], 
    ];

    this.config = new ColumnChartConfig("Employees by work type", "", "");
    this.elementId = 'employeeByWorkType';

    this.chartService.BuildColumnChart(this.elementId, this.data, this.config);
  }

}
