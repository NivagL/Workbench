import { Injectable } from '@angular/core';
import { ChartsBaseService } from './charts-base.service';
import { PieChartConfig } from '../../model/google-charts/pie-chart-config';

declare var google: any;

@Injectable()
export class PieChartService extends ChartsBaseService {

  constructor() { super(); }

  public BuildPieChart(elementId: string, data: any[], config: PieChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.PieChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            pieHole: config.pieHole,
      };

    this.buildChart(data, chartFunc, options);
  }
}