declare var google: any;

export class ChartsBaseService {
  constructor() { 
    google.charts.load('current', {'packages':['corechart']});
  }

  protected buildChart(data: any[], chartFunc: any, options: any) : void {
    var func = (chartFunc, options) => {
      var datatable = google.visualization.arrayToDataTable(data);
      chartFunc().draw(datatable, options);
    };   
    var callback = () => func(chartFunc, options);
    google.charts.setOnLoadCallback(callback);
  }
  
}