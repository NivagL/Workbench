import { Component, OnInit } from '@angular/core';
import { Workorder } from '../../model/workorder';
import { WorkorderService } from '../../service/workorder.service';
import { WorkorderDetailComponent } from './workorder-detail/workorder-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.scss']
})
export class WorkorderComponent implements OnInit {

  public workorders: Array<Workorder>;
  public columnsToDisplay = ['workorderId', 'workorderTitle', 'workorderIndex'];
  public workordersLoaded = false;

  private selectedIndex: number;
  private selectedWorkorder: Workorder;


  constructor(
    public workorderService: WorkorderService,
  ) {
    
  }

  onClickRow(row) {
    console.log('WorkorderComponent onClickRow', row);
    this.selectedIndex = row.Index;
    this.selectedWorkorder = this.workorders[row.Index];
  }
  
  ngOnInit() {

    // this.workorderService.getWorkorders().subscribe(
    //   (array_of_workorders) => { this.workorders = array_of_workorders; }
    // );
    this.workorderService.getMappedJSONWorkorders().subscribe(
      (array_of_workorders) => {
        this.workorders = array_of_workorders;
        this.workordersLoaded = true;
      }
    );

  }

  onTitleChange(newTitle) {
    console.log('on .. title ... change', newTitle);
    // this.workorders[this.selectedIndex].Title = newTitle;
    this.selectedWorkorder.Title = newTitle;
  }

  rowClass(row) {
    let rowClasses = [];
    console.log('rowClass()', row);
    if (row.Index == this.selectedIndex) {
      rowClasses.push('selected');
    }
    return rowClasses;
  }
}
