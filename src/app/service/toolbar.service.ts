import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { ConfigurationService } from './../service/configuration.service';

@Injectable({
  providedIn: 'root'
})
export class ToolbarService {
  private title: BehaviorSubject<string>
  private appName: string
  private subTitle: string

  constructor(config: ConfigurationService) { 
    this.appName = config.getConfiguration('appName');
    this.title = new BehaviorSubject<string>(this.appName);
  }

  getTitle(): Observable<string> {
    return this.title;
  }

  setSubTitle(subtitle: string) {
    this.subTitle = subtitle;
    this.title.next(this.appName + ' ' + this.subTitle);
  }
}
