import { Component, OnInit } from '@angular/core';

interface WorkorderJSON {
  id: number,
  title: string,
};

@Component({
  selector: 'app-workorder',
  templateUrl: './workorder.component.html',
  styleUrls: ['./workorder.component.css']
})
export class WorkorderComponent implements OnInit {

  public work_orders: Array<WorkorderJSON>;
  public columnsToDisplay = ['workorderId', 'workorderTitle'];


  constructor() { }

  ngOnInit() {
    this.work_orders = [
      { id: 1, title: 'First', },
      { id: 2, title: 'Second', },
    ];
  }

}
