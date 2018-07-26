import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {Damage} from '../model/damage';

@Injectable({
  providedIn: 'root'
})
export class DamageService extends DataService<Damage>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("Damage", config, http) 
  }
}
