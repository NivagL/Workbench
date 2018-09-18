import { Component, OnInit, Input } from '@angular/core';
import { Workorder } from '../../../model/workorder';
import { WorkorderService } from '../../../service/workorder.service';

@Component({
  selector: 'app-workorder-detail',
  templateUrl: './workorder-detail.component.html',
  styleUrls: ['./workorder-detail.component.css']
})
export class WorkorderDetailComponent implements OnInit {

  @Input() index: number; // index of the Workorder whose detail we display
  public workorder: Workorder;

  constructor(
    public workorderService: WorkorderService,
  ) { }

  ngOnInit() {
  }

}
