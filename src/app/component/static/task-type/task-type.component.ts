import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {TaskType} from '../../../model/task-type'
import {TaskTypeService} from '../../../service/task-type.service'

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css']
})
export class TaskTypeComponent implements OnInit {
  public list: Observable<Array<TaskType>>;
  public item: TaskType;

  constructor(private service: TaskTypeService) { 
    this.list = service.getList();
  }

  ngOnInit() {
  }

}
