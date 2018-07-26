import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, BehaviorSubject} from 'rxjs';

import {ConfigurationService} from './configuration.service';
import {DataService} from './data.service';
import {UserAuth} from '../model/user-auth';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  UserId: BehaviorSubject<string>;
  
  constructor(config: ConfigurationService,
    public http: HttpClient) {
    this.UserId = new BehaviorSubject<string>("");

      let url: string = '/.auth/me'

      this.http.get(url).subscribe(
        (data: UserAuth[]) => {
          this.UserId.next(data[0].user_id);
          console.log(JSON.stringify(data));

        },
      err => console.log(' Service, Error loading data from url ' + url + ': ' + err),
      () => { console.log( ' Service, loaded data from url: ' + url);
      });       
  }

}
