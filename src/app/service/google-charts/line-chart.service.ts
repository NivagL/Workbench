import { Injectable } from '@angular/core';
import { ChartsBaseService } from './charts-base.service';
import { LineChartConfig } from '../../model/google-charts/line-chart-config';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class LineChartService extends ChartsBaseService {

  constructor() { super(); }

  public BuildLineChart(elementId: string, data: any[], config: LineChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.LineChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            subtitle: config.subtitle,
            curveType: config.curveType
      };

    this.buildChart(data, chartFunc, options);
  }
}
