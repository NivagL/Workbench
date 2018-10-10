import { Component, OnInit } from '@angular/core';
// import { WorkOrder } from '../../model/work-order';
// import { WorkOrderService } from '../../service/work-order.service';
import { WorkOrderService, WorkOrder } from '@saille/northpower.planned.service';
import { WorkOrderDetailComponent } from './work-order-detail/work-order-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSort} from '@angular/material';

 
@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {

  public workOrders: Array<WorkOrder> = null;
  public columnsToDisplay = ['id', 'clientId', 'workTypeId', 'clientRequestId', 'requested', 'received', 'status', 'statusChanged', 'description', 'scheduledStart', 'scheduledEnd', 'activities'];

  private selectedIndex: string; // Guid
  private selectedWorkOrder: WorkOrder;

  constructor(
    private workOrderService: WorkOrderService,
  ) {
    
  }

  onClickRow(row) {
    console.log('WorkOrderComponent onClickRow', row);
    this.selectedIndex = row.id; // Guid
    this.selectedWorkOrder = this.workOrders.find(workorder => workorder.id == row.id);
  }
  
  ngOnInit() {
    console.log('WorkOrderComponent.ngOnInit() started');
    this.workOrderService.workOrderGetAll().subscribe(
      (array_of_workOrders) => {
        this.workOrders = array_of_workOrders;
        console.log('WorkOrderComponent.ngOnInit() subscribe: loaded workorders into this.workOrders', this.workOrders);
      }
    );
  }

  sortData(event) {
    console.log('sortData started');
    console.log('sortData event', event);

    let sortFunction = this.getSortFunction(event);
    let tempWorkOrders = this.workOrders.slice(0);
    this.workOrders = tempWorkOrders.sort(sortFunction);
    console.log('sortData this.workOrders', this.workOrders);
  }

  private getSortFunction(event) {
    let col = event.active;
    let gt = function(v1, v2) { return v1[col] > v2[col] };
    let lt = function(v1, v2) { return v1[col] < v2[col] };
    return (event.direction == 'asc') ? gt : lt;
  }

  onDescriptionChange(newDescription) {
    console.log('on .. description ... change', newDescription);
    this.selectedWorkOrder.description = newDescription;
  }

  rowClass(row) {
    let rowClasses = [];
    if (row.id == this.selectedIndex) {
      rowClasses.push('selected');
    }
    return rowClasses;
  }

}
