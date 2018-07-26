import { Injectable } from '@angular/core';
import { ChartsBaseService } from './charts-base.service';
import { ColumnChartConfig } from '../../model/google-charts/column-chart-config';

declare var google: any;

@Injectable({
  providedIn: 'root'
})
export class ColumnChartService extends ChartsBaseService {

  constructor() { super(); }

  public BuildColumnChart(elementId: string, data: any[], config: ColumnChartConfig) : void {  
    var chartFunc = () => { return new google.visualization.ColumnChart(document.getElementById(elementId)); };
    var options = {
            title: config.title,
            subtitle: config.subtitle,
            curveType: config.curveType
      };

    this.buildChart(data, chartFunc, options);
  }
}
