import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Workorder } from '../../../model/workorder';
import { WorkorderService } from '../../../service/workorder.service';

@Component({
  selector: 'app-workorder-detail',
  templateUrl: './workorder-detail.component.html',
  styleUrls: ['./workorder-detail.component.scss']
})
export class WorkorderDetailComponent implements OnInit {

  @Input() index: number; // index of the Workorder whose detail we display
  @Input() title: string; 
  @Output() titleChange = new EventEmitter();
  public workorder: Workorder;

  constructor(
    public workorderService: WorkorderService,
  ) { }

  ngOnInit() {
    console.log('WorkorderDetailComponent ngOnInit');
    console.log('index: ', this.index);
    console.log('title: ', this.title);
  }

  updateTitle() {
    console.log('updateTitle() called');
    this.titleChange.emit(this.title);

  }
}
