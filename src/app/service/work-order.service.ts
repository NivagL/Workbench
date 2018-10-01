import { Injectable } from '@angular/core';
import { WorkOrder } from '../model/work-order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

interface WorkOrderJSON {
  orderData: any,
  return: any,
}


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
        .get<WorkOrderJSON[]>(this.workOrderUrl, httpOptions)
        .pipe(
          map( (data) => {
            console.log('getMappedJSONWorkOrders data', data);
            console.log(data);
            let mappedData = data.map(
              (d, i) => {
                // let result = {Id: 0, Title: 'null', Index: 0}
                let result = {
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
                  result = {
                    id: d.return.id,
                    clientId: i,
                    workTypeId: i,
                    clientRequestId: 'clientRequestId string',
                    requested: new Date(),
                    received: new Date(),
                    status: i,
                    statusChanged: new Date(),
                    description: d.return.message,
                    scheduledStart: new Date(),
                    scheduledEnd: new Date(),
                    activities: [],
                  }
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

  // public getWorkOrders(): Observable<Array<WorkOrder>> {
  //   console.log('getWorkOrders');
  //   // return this.getWorkOrdersFromData();
  //   return this.getWorkOrdersFromUrl(this.workOrderUrl);
  // }

  // public getWorkOrdersFromData(): Observable<Array<WorkOrder>> {
  //   console.log('getWorkOrdersFromData');
  //   return of( this.dataWorkOrders );
  // }

  // private getWorkOrdersFromUrl(the_url: string): Observable<Array<WorkOrder>> {

  //   // this.httpClient.get(the_url).subscribe(
  //   //   (data: any) => {
  //   //       console.log('getWorkOrdersFromUrl');
  //   //       this.dataWorkOrders = data;
  //   //       return of( this.dataWorkOrders);
  //   //   },
  //   // err => console.log('WorkOrderService, Error loading data from url ' + the_url + ': ' + err),
  //   // () => { console.log('WorkOrderService, loaded data from url: ' + the_url);
  //   // });    

  //   // this.dataWorkOrders = await this.httpClient.get<Any>(the_url).toPromise();
  //   this.getWorkOrderByJSON(the_url);
  //   console.log('getWorkOrderByJSON');
  //   console.log(this.dataWorkOrders);
  //   console.log('getWorkOrderByJSON agaion');
  //   // this.dataWorkOrdersJSON = this.dataWorkOrders;
  //   return of( this.dataWorkOrders );
  // }

  // private getWorkOrderByJSON(the_url: string) {
  //   this.httpClient.get<Array<WorkOrderJSON>>(the_url).subscribe(
  //     (data) => {
  //       console.log(data);
  //       let mappedData = data.map((d, i) => ({Id: +d.orderData.header.orderNumber, Title: d.return.message, Index: i}));
  //       console.log(mappedData);
  //       // this.dataWorkOrdersJSON = mappedData;
  //       // this.dataWorkOrdersJSON = this.dataWorkOrders;
  //     });
  //   // return this.dataWorkOrders;
  // }
}
