import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {WorkType} from '../../../model/work-type'
import {WorkTypeService} from '../../../service/work-type.service'

@Component({
  selector: 'app-work-type',
  templateUrl: './work-type.component.html',
  styleUrls: ['./work-type.component.css']
})
export class WorkTypeComponent implements OnInit {
  public list: Observable<Array<WorkType>>;
  public item: Observable<WorkType>;

  constructor(private service: WorkTypeService) { 
    this.list = service.getList();
    this.item = service.getItem();
  }

  ngOnInit() {
  }

}
