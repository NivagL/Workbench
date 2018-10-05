import { Injectable } from '@angular/core';
// import { WorkOrder } from '../model/work-order';
import { WorkOrder, WorkOrderActivity } from 'northpower.planned.service/model/models';
import { Observable, BehaviorSubject, of } from 'rxjs';
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
  private mappedWorkOrder: Observable<WorkOrder> = null;
  private jsonWorkOrders: WorkOrder[] = null;


  // private workOrderUrl:string = 'https://vector-planned-dv1-northpowerb2b.azurewebsites.net/api/workorder';
  private workOrderUrl:string = 'https://planned-dv1.northpowerb2b.com/api/WorkOrder';

  constructor(
  public httpClient: HttpClient,
  ) {
    // let someWorkOrder = new WorkOrder();
    // let emptyWorkOrder = {} as WorkOrder;
    // this.mappedWorkOrder = new Observable<WorkOrder>(emptyWorkOrder);

  }

  // public getMappedJSONWorkOrders(): Observable<WorkOrder[]> {
  //   const httpOptions = {
  //     headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  //   };
  //   console.log('getMappedJSONWorkOrders called');
  //   if (!this.mappedWorkOrders) {
  //     console.log('getMappedJSONWorkOrders getting mappedWorkOrders');
  //     this.mappedWorkOrders = this.httpClient
  //       .get<WorkOrder[]>(this.workOrderUrl, httpOptions)
  //       .pipe(
  //         map( (data) => {
  //           console.log('getMappedJSONWorkOrders data', data);
  //           console.log(data);
  //           let mappedData = data.map(
  //             (d, i) => {
  //               let result: WorkOrder = {
  //                 id: 'nought',
  //                 clientId: i,
  //                 workTypeId: i,
  //                 clientRequestId: 'clientRequestId string',
  //                 requested: new Date(),
  //                 received: new Date(),
  //                 status: i,
  //                 statusChanged: new Date(),
  //                 description: 'description string',
  //                 scheduledStart: new Date(),
  //                 scheduledEnd: new Date(),
  //                 activities: [],
  //               }

  //               if (d) {
  //                 result = d;
  //               }
  //               return result;
  //             }
  //           );
  //           console.log('getMappedJSONWorkOrders mappedData', mappedData);
  //           return mappedData;
  //         })
  //       );
  //   }
  //   console.log('getMappedJSONWorkOrders returns');
  //   return this.mappedWorkOrders;
  // }

  public getJSONWorkOrders(): Observable<WorkOrder[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    return new Observable<WorkOrder[]>((observer) => {

      if (this.jsonWorkOrders == null) {
        //
        // We haven't fetched the work orders via http.  So do that now.
        //
        console.log('getJSONWorkOrders getting Work Orders');
        this.httpClient.get<WorkOrder[]>(this.workOrderUrl, httpOptions).subscribe(
          (data) => { 
            console.log('getJSONWorkOrders data', data);
            this.jsonWorkOrders = data;
            observer.next(this.jsonWorkOrders);
          },
          (error) => {
            console.log('getJSONWorkOrders http get error', error);
            observer.error(error);
          },
          () => {
            console.log('getJSONWorkOrders complete');
            observer.complete();
          },
        );
      } else {
        //
        // Already fetched via http so return cached value
        //
        observer.next(this.jsonWorkOrders);
        observer.complete();
      }
    });
  }

  public getMappedJSONWorkOrderById(id: string): Observable<WorkOrder> {

    return new Observable((observer) => {
      if (this.jsonWorkOrders == null) {
        //
        // We haven't fetched the work orders via http.  So do that now.
        //
        this.getJSONWorkOrders().subscribe(
          (array_of_workOrders) => {
            //
            // this code gets repeated!
            //
            let thisWorkOrder = array_of_workOrders.find((el) => el.id == id);
            if (thisWorkOrder) {
              observer.next(thisWorkOrder);
              observer.complete();
            } else {
              observer.error(`work order ${id} not found`);
            }
          }
        );

      } else {
        //
        // this code has been repeated!
        //
        let thisWorkOrder = this.jsonWorkOrders.find((el) => el.id == id);
        if (thisWorkOrder) {
          observer.next(thisWorkOrder);
          observer.complete();
        } else {
          observer.error(`work order ${id} not found`);
        }
      }

    });
  }


  
}
