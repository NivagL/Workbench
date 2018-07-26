import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ConfigurationService} from './../configuration.service';
import {DataService} from './../data.service';
import {WorkType} from './../../model/work-type';

@Injectable({
  providedIn: 'root'
})
export class WorkTypeService extends DataService<WorkType>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("WorkType", config, http) 
  }
}
