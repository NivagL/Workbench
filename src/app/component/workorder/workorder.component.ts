import { Component, OnInit } from '@angular/core';
import { Workorder } from '../../model/workorder';
import { WorkorderService } from '../../service/workorder.service';


@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})
export class WorkorderComponent implements OnInit {

  public work_orders: Array<Workorder>;
  public columnsToDisplay = ['workorderId', 'workorderTitle'];


  constructor(
    public workorderService: WorkorderService,
  ) {
    
  }

  ngOnInit() {

    // this.workorderService.getWorkorders().subscribe(
    //   (array_of_work_orders) => { this.work_orders = array_of_work_orders; }
    // );
    this.workorderService.getMappedJSONWorkorders().subscribe(
      (array_of_work_orders) => { this.work_orders = array_of_work_orders; }
    );

  }

}
