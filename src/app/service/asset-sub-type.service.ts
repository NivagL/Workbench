import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {AssetSubType} from '../model/asset-sub-type';

@Injectable({
  providedIn: 'root'
})
export class AssetSubTypeService extends DataService<AssetSubType>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("AssetSubType", config, http) 
  }
}
