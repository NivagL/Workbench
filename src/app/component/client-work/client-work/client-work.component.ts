import { Component, OnInit, Input } from '@angular/core';
import { Observable, BehaviorSubject, zip } from 'rxjs';
import { Routes, Router } from '@angular/router';

import { DateService } from './../../../service/date.service'

import { WorkType } from '../../../model/work-type'
import { WorkTypeService } from '../../../service/work-type.service'

import { Client } from '../../../model/client'
import { ClientService } from '../../../service/client.service'

@Component({
  selector: 'app-client-work',
  templateUrl: './client-work.component.html',
  styleUrls: ['./client-work.component.css']
})
export class ClientWorkComponent implements OnInit {
  workList: Observable<Array<WorkType>>;
  workItem: Observable<WorkType>;

  clientList: Observable<Array<Client>>;
  clientItem: Observable<Client>;

  constructor(private router: Router,
    private dateService: DateService,
    private workService: WorkTypeService,
    private clientService: ClientService) {
  }

  ngOnInit() {
    this.workList = this.workService.getList();
    this.workItem = this.workService.getItem();
    this.clientList = this.clientService.getList();
    this.clientItem = this.clientService.getItem();

  //   zip(this.workList, this.clientList)
  //   .subscribe( param => {
  //     console.log('work ' + param["0"].length);
  //     console.log('client ' + param["1"].length);
  //     param["0"].forEach(w => {
  //       param["1"].forEach(c => {

  //         //do we have a url for this combination?

  //         // owners.push({client: c, work: w, url: ''});

  //       });  
  //     })
  // });
  }
  onQAClick() {
    this.router.navigate(['/rmqa']);
  } 
  onWorkorderClick() {
    this.router.navigate(['/workorders']);
  } 
}
