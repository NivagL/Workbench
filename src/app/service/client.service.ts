import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {Client} from '../model/client';

@Injectable({
  providedIn: 'root'
})
export class ClientService extends DataService<Client>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("Client", config, http) 
  }
}
