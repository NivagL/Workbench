import { Component, OnInit } from '@angular/core';
import { WorkOrder } from '../../model/work-order';
import { WorkOrderService } from '../../service/work-order.service';
import { WorkOrderDetailComponent } from './work-order-detail/work-order-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-work-order',
  templateUrl: './work-order.component.html',
  styleUrls: ['./work-order.component.scss']
})
export class WorkOrderComponent implements OnInit {

  public workOrders: Array<WorkOrder>;
  public columnsToDisplay = ['id', 'clientId', 'workTypeId', 'clientRequestId', 'requested', 'received', 'status', 'statusChanged', 'description', 'scheduledStart', 'scheduledEnd', 'activities'];
  // public columnsToDisplay = ['id'];
  public workOrdersLoaded = false;

  private selectedIndex: number;
  private selectedWorkOrder: WorkOrder;


  constructor(
    public workOrderService: WorkOrderService,
  ) {
    
  }

  onClickRow(row) {
    console.log('WorkOrderComponent onClickRow', row);
    this.selectedIndex = row.clientId; // Mick Temp WRONG!
    this.selectedWorkOrder = this.workOrders[row.clientId];
  }
  
  ngOnInit() {

    // this.workOrderService.getWorkOrders().subscribe(
    //   (array_of_workOrders) => { this.workOrders = array_of_workOrders; }
    // );
    this.workOrderService.getMappedJSONWorkOrders().subscribe(
      (array_of_workOrders) => {
        this.workOrders = array_of_workOrders;
        this.workOrdersLoaded = true;

        if (array_of_workOrders.length > 0) {
          console.log('First workorder', array_of_workOrders[0]);
          console.log('typeof First workorder', typeof array_of_workOrders[0]);
          console.log('First workorder getOwnPropertyNames', Object.getOwnPropertyNames(array_of_workOrders[0]));
        }
      }
    );

  }

  onDescriptionChange(newDescription) {
    console.log('on .. description ... change', newDescription);
    // this.selectedWorkOrder.Description = newDescription;
    this.selectedWorkOrder.description = newDescription;
  }

  rowClass(row) {
    let rowClasses = [];
    // console.log('rowClass()', row);
    if (row.clientId == this.selectedIndex) {
      rowClasses.push('selected');
    }
    return rowClasses;
  }
}
