import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
// import {  } from '@saille/northpower.planned.service/model/models';
// import { WorkOrderService } from '../../service/work-order.service';
import { WorkOrder, WorkOrderActivity, WorkOrderService } from '@saille/northpower.planned.service';

import { ToastrService } from 'ngx-toastr';
 
@Component({
  selector: 'app-workorder-activity',
  templateUrl: './workorder-activity.component.html',
  styleUrls: ['./workorder-activity.component.css']
})
export class WorkorderActivityComponent implements OnInit {

  private workOrderId: string; // Guid
  private workOrder: WorkOrder;

  public columnsToDisplay = ['id', 'workOrderId', 'assetId'];
  public workOrderActivitiesLoaded = false;

  private selectedIndex: string; // Guid
  private selectedActivity: WorkOrderActivity;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private workOrderService: WorkOrderService,
    private toastr: ToastrService,
  ) { }

  ngOnInit() {
    this.workOrderId = this.route.snapshot.paramMap.get('workOrderId');
    console.log('WorkorderActivityComponent.ngOnInit starting');
    console.log('WorkorderActivityComponent.ngOnInit this.workOrderId', this.workOrderId);


    // this.workOrderService.getMappedJSONWorkOrderById(this.workOrderId).subscribe( // Local service
    //   (workOrder) => {
    //     this.workOrder = workOrder;
    //     console.log('WorkorderActivityComponent.ngOnInit subscribe data this.workOrder', this.workOrder);
    //     this.workOrderActivitiesLoaded = true;
    //   },
    //   (error) => {
    //     this.toastr.error(error.toString(), 'Activites Load Error');
    //     console.log('WorkorderActivityComponent.ngOnInit getMappedJSONWorkOrderById subscribe error', error);
    //   },
    //   () =>{ console.log('WorkorderActivityComponent.ngOnInit getMappedJSONWorkOrderById subscribe complete');} 
    // );

    this.workOrderService.workOrderGet(this.workOrderId).subscribe(
      (workOrder) => {
        this.workOrder = workOrder;
        console.log('WorkorderActivityComponent.ngOnInit subscribe data this.workOrder', this.workOrder);
        this.workOrderActivitiesLoaded = true;
      },
      (error) => {
        this.toastr.error(error.toString(), 'Activites Load Error');
        console.log('WorkorderActivityComponent.ngOnInit workOrderGet subscribe error', error);
      },
      () =>{ console.log('WorkorderActivityComponent.ngOnInit workOrderGet subscribe complete');} 
    );


  }

  onClickRow(row) {
    console.log('WorkorderActivityComponent onClickRow', row);
  }



}
