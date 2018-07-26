import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './../configuration.service';
import {DataService} from './../data.service';
import {NetworkType} from './../../model/network-type';

@Injectable({
  providedIn: 'root'
})
export class NetworkTypeService extends DataService<NetworkType>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("NetworkType", config, http) 
  }
}
