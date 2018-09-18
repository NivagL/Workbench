import { Component, OnInit } from '@angular/core';
import { Workorder } from '../../model/workorder';
import { WorkorderService } from '../../service/workorder.service';
import { WorkorderDetailComponent } from './workorder-detail/workorder-detail.component';


@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})
export class WorkorderComponent implements OnInit {

  public workorders: Array<Workorder>;
  public columnsToDisplay = ['workorderId', 'workorderTitle', 'workorderIndex'];


  constructor(
    public workorderService: WorkorderService,
  ) {
    
  }

  onClickRow() {
    console.log('WorkorderComponent onClickRow');
  }
  
  ngOnInit() {

    // this.workorderService.getWorkorders().subscribe(
    //   (array_of_workorders) => { this.workorders = array_of_workorders; }
    // );
    this.workorderService.getMappedJSONWorkorders().subscribe(
      (array_of_workorders) => { this.workorders = array_of_workorders; }
    );

  }

}
