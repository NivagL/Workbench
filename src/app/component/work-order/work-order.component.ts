import { Component, OnInit } from '@angular/core';
// import { WorkOrder } from '../../model/work-order';
// import { WorkOrderService } from '../../service/work-order.service';
import { WorkOrderService, WorkOrder } from '@saille/northpower.planned.service';
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


    // this.workOrderService.getJSONWorkOrders().subscribe( // Local service definition
    //   (array_of_workOrders) => {
    //     this.workOrders = array_of_workOrders;
    //     this.workOrdersLoaded = true;
    //   }
    // );

    this.workOrderService.workOrderGetAll().subscribe(
      (array_of_workOrders) => {
        this.workOrders = array_of_workOrders;
        this.workOrdersLoaded = true;
        console.log('WorkOrderComponent.ngOnInit() loaded workorders into this.workOrders', this.workOrders);
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
    if (row.id == this.selectedIndex) {
      rowClasses.push('selected');
    }
    return rowClasses;
  }

}
