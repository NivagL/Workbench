import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ConfigurationService} from './../configuration.service';
import {DataService} from './../data.service';
import {TaskCategory} from './../../model/task-category';

@Injectable({
  providedIn: 'root'
})
export class TaskCategoryService extends DataService<TaskCategory>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("TaskCategory", config, http) 
  }
}
