import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ConfigurationService} from './../configuration.service';
import {DataService} from './../data.service';
import {TaskType} from './../../model/task-type';

@Injectable({
  providedIn: 'root'
})
export class TaskTypeService extends DataService<TaskType>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("TaskType", config, http) 
  }
}