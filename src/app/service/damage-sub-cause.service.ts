import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {DamageSubCause} from '../model/damage-sub-cause';

@Injectable({
  providedIn: 'root'
})
export class DamageSubCauseService extends DataService<DamageSubCause>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("DamageSubCause", config, http) 
  }
}
