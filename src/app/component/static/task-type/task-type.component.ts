import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

import {TaskType} from '../../../model/task-type'
import {TaskTypeService} from '../../../service/task-type.service'

@Component({
  selector: 'app-task-type',
  templateUrl: './task-type.component.html',
  styleUrls: ['./task-type.component.css']
})
export class TaskTypeComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  private _TaskCategoryId: number;
  @Input() set TaskCategoryId(data: number) {
    this._TaskCategoryId = data;
    this.getList();
  }
  get TaskCategoryId(): number {
    return this._TaskCategoryId;
  }

  public list: BehaviorSubject<Array<TaskType>>;
  public item: BehaviorSubject<TaskType>;

  constructor(private service: TaskTypeService) { 
    this.onSelected = new EventEmitter();

    let list = new Array<TaskType>();
    this.list = new BehaviorSubject<Array<TaskType>>(list);
  
    let item = new TaskType();
    this.item = new BehaviorSubject<TaskType>(item);
  }

  ngOnInit() { 
    this.getList();
  }

  private subscription: any;
  getList() {
    //TODO **GL**
    // if(this.subscription != undefined) {
    //   this.subscription.unsubscribe();
    // }

    var list = new Array<TaskType>();
    this.service.getLoadedList().forEach(
      item => {
        if(this.TaskCategoryId == undefined){
          list.push(item);
        } else {
          if(item.CategoryId == this.TaskCategoryId) {
            list.push(item);
          }
        }
    });
    this.list.next(list);
    //this.item.next(list[0]);
  }

  onChange(selected: TaskType) {
    //this.item.next(selected);
    this.onSelected.emit(selected.Id);
  }

}
