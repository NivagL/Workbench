import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Activity} from '../../../model/activity'
import {ActivityService} from '../../../service/activity.service'

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  public list: Observable<Array<Activity>>;
  public item: Activity;

  constructor(private service: ActivityService) { 
    this.list = service.getList();
  }

  ngOnInit() {
  }

}
