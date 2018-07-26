import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {Activity} from '../model/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService extends DataService<Activity>{

  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("Activity", config, http) 
  }
}
