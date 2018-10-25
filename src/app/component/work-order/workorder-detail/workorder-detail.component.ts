import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
// import { WorkOrder } from '@saille/northpower.planned.service/model/models';
// import { WorkOrderService } from '../../../service/work-order.service';
import { WorkOrderService, WorkOrder } from '@saille/northpower.planned.service';

@Component({
  selector: 'app-workorder-detail',
  templateUrl: './workorder-detail.component.html',
  styleUrls: ['./workorder-detail.component.scss']
})
export class WorkOrderDetailComponent implements OnInit {

  @Input() index: number; // index of the WorkOrder whose detail we display
  @Input() description: string; 
  @Output() descriptionChange = new EventEmitter();
  public workOrder: WorkOrder;

  constructor(
    public workOrderService: WorkOrderService,
  ) { }

  ngOnInit() {
    console.log('WorkOrderDetailComponent ngOnInit');
    console.log('index: ', this.index);
    console.log('description: ', this.description);
  }

  updateDescription() {
    console.log('updateDescription() called');
    this.descriptionChange.emit(this.description);

  }
}
