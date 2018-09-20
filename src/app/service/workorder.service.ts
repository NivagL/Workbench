import { Injectable } from '@angular/core';
import { Workorder } from '../model/workorder';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap, filter } from 'rxjs/operators';

interface WorkorderJSON {
  orderData: any,
  return: any,
}


@Injectable({
  providedIn: 'root'
})

export class WorkorderService {

  private mappedWorkOrders: Observable<Workorder[]> = null;

  private workorderUrl:string = 'https://vector-planned-dv1-northpowerb2b.azurewebsites.net/api/workorder';

  constructor(
  public httpClient: HttpClient,
  ) { }

  public getMappedJSONWorkorders(): Observable<Workorder[]> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
    if (!this.mappedWorkOrders) {
      this.mappedWorkOrders = this.httpClient
        .get<WorkorderJSON[]>(this.workorderUrl, httpOptions)
        .pipe(
          map( (data) => {
            console.log('getMappedJSONWorkorders data', data);
            console.log(data);
            let mappedData = data.map(
              (d, i) => ({Id: d.return.id, Title: d.return.message, Index: i})
            );
            console.log('getMappedJSONWorkorders mappedData', mappedData);
            return mappedData;
          })
        );
    }
    return this.mappedWorkOrders;
  }

  // public getWorkorders(): Observable<Array<Workorder>> {
  //   console.log('getWorkorders');
  //   // return this.getWorkordersFromData();
  //   return this.getWorkordersFromUrl(this.workorderUrl);
  // }

  // public getWorkordersFromData(): Observable<Array<Workorder>> {
  //   console.log('getWorkordersFromData');
  //   return of( this.dataWorkorders );
  // }

  // private getWorkordersFromUrl(the_url: string): Observable<Array<Workorder>> {

  //   // this.httpClient.get(the_url).subscribe(
  //   //   (data: any) => {
  //   //       console.log('getWorkordersFromUrl');
  //   //       this.dataWorkorders = data;
  //   //       return of( this.dataWorkorders);
  //   //   },
  //   // err => console.log('WorkorderService, Error loading data from url ' + the_url + ': ' + err),
  //   // () => { console.log('WorkorderService, loaded data from url: ' + the_url);
  //   // });    

  //   // this.dataWorkorders = await this.httpClient.get<Any>(the_url).toPromise();
  //   this.getWorkorderByJSON(the_url);
  //   console.log('getWorkorderByJSON');
  //   console.log(this.dataWorkorders);
  //   console.log('getWorkorderByJSON agaion');
  //   // this.dataWorkordersJSON = this.dataWorkorders;
  //   return of( this.dataWorkorders );
  // }

  // private getWorkorderByJSON(the_url: string) {
  //   this.httpClient.get<Array<WorkorderJSON>>(the_url).subscribe(
  //     (data) => {
  //       console.log(data);
  //       let mappedData = data.map((d, i) => ({Id: +d.orderData.header.orderNumber, Title: d.return.message, Index: i}));
  //       console.log(mappedData);
  //       // this.dataWorkordersJSON = mappedData;
  //       // this.dataWorkordersJSON = this.dataWorkorders;
  //     });
  //   // return this.dataWorkorders;
  // }
}
