import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './../configuration.service';
import {DataService} from './../data.service';
import {DamageCause} from './../../model/damage-cause';

@Injectable({
  providedIn: 'root'
})
export class DamageCauseService extends DataService<DamageCause>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("DamageCause", config, http) 
  }
}
