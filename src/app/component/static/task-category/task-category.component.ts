import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {TaskCategory} from '../../../model/task-category'
import {TaskCategoryService} from '../../../service/task-category.service'

@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})
export class TaskCategoryComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  public list: Observable<Array<TaskCategory>>;
  public item: TaskCategory;

  constructor(private service: TaskCategoryService) { 
    this.onSelected = new EventEmitter();
  }

  ngOnInit() {
    //get the item from the list based on the input
    this.list = this.service.getList();
    this.list.subscribe(list => {
      list.forEach(item => {
        if(item.Id == this.Id) {
          this.item = item;
          return;
        }
      }); 
      if(this.Id == undefined) {
        this.Id = list[0].Id;
      }
    });
  }

  onChange(selected: TaskCategory) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
