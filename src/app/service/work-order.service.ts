import { Injectable } from '@angular/core';
// import { WorkOrder } from '../model/work-order';
import { WorkOrder, WorkOrderActivity } from 'northpower.planned.service/model/models';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

// interface WorkOrderJSON {
//   orderData: any,
//   return: any,
// }


@Injectable({
  providedIn: 'root'
})

export class WorkOrderService {

  private mappedWorkOrders: Observable<WorkOrder[]> = null;

  private workOrderUrl:string = 'https://vector-planned-dv1-northpowerb2b.azurewebsites.net/api/workorder';

  constructor(
  public httpClient: HttpClient,
  ) { }

  public getMappedJSONWorkOrders(): Observable<WorkOrder[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    if (!this.mappedWorkOrders) {
      this.mappedWorkOrders = this.httpClient
        .get<WorkOrder[]>(this.workOrderUrl, httpOptions)
        .pipe(
          map( (data) => {
            console.log('getMappedJSONWorkOrders data', data);
            console.log(data);
            let mappedData = data.map(
              (d, i) => {
                // let result = {Id: 0, Title: 'null', Index: 0}
                let result: WorkOrder = {
                  id: 'nought',
                  clientId: i,
                  workTypeId: i,
                  clientRequestId: 'clientRequestId string',
                  requested: new Date(),
                  received: new Date(),
                  status: i,
                  statusChanged: new Date(),
                  description: 'description string',
                  scheduledStart: new Date(),
                  scheduledEnd: new Date(),
                  activities: [],
                }

                if (d) {
                  console.log('getMappedJSONWorkOrders d not null');
                  // result = {
                  //   id: d.id,
                  //   clientId: i,
                  //   workTypeId: i,
                  //   clientRequestId: 'clientRequestId string',
                  //   requested: new Date(),
                  //   received: new Date(),
                  //   status: i,
                  //   statusChanged: new Date(),
                  //   description: d.message,
                  //   scheduledStart: new Date(),
                  //   scheduledEnd: new Date(),
                  //   activities: [],
                  // }
                  result = d;
                }
                return result;
              }
            );
            console.log('getMappedJSONWorkOrders mappedData', mappedData);
            return mappedData;
          })
        );
    }
    return this.mappedWorkOrders;
  }

}
