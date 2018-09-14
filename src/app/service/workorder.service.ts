import { Injectable } from '@angular/core';
import { Workorder } from '../model/workorder';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkorderService {

  private _DataWorkorders = [
    { Id: 111, Title: 'First First First', },
    { Id: 222, Title: 'Second Second Second', },
  ];

  constructor() { }

  public getWorkOrders(): Observable<Array<Workorder>> {
    return of( this._DataWorkorders );
  }
}
