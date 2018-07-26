import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {AssetType} from '../model/asset-type';

@Injectable({
  providedIn: 'root'
})
export class AssetTypeService extends DataService<AssetType>{
  constructor(config: ConfigurationService,
    public http: HttpClient) {
      super("AssetType", config, http) 
  }
}
