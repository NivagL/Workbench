import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {TaskCategory} from '../../../model/task-category'
import {TaskCategoryService} from '../../../service/task-category.service'

@Component({
  selector: 'app-task-category',
  templateUrl: './task-category.component.html',
  styleUrls: ['./task-category.component.css']
})
export class TaskCategoryComponent implements OnInit {
  public list: Observable<Array<TaskCategory>>;
  public item: TaskCategory;

  constructor(private service: TaskCategoryService) { 
    this.list = service.getList();
  }

  ngOnInit() {
  }

}
