import { Component, OnInit, Input } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormControl, FormGroup } from '@angular/forms';
import { Routes, Router } from '@angular/router';

import { DateService } from '../../../service/date.service';

import { Client } from '../../../model/client';
import { ClientService } from '../../../service/client.service';

import { WorkType } from '../../../model/work-type';
import { WorkTypeService } from '../../../service/work-type.service';

@Component({
  selector: 'app-rm-work-qa-list',
  templateUrl: './rm-work-qa-list.component.html',
  styleUrls: ['./rm-work-qa-list.component.css']
})
export class RmWorkQaListComponent implements OnInit {
  client: Client;
  work: WorkType;
  addressFilter: string;
  pageSize: number = 20;
  pageSizeOptions: number[] = [10, 20, 30];

  displayedColumns = ['NetworkId', 'TaskCategory', 'TaskType', 'ReceivedDate', 'Description', 'Status', 'Address', 'Visits'];

  dataSource: {NetworkId: string, TaskCategory: string, TaskType: string, ReceivedDate: string, Description: string, Ranking: number, Status: string, Address: string, Visits: number}[]
    = [
      {NetworkId:'VN_1-2973133152', TaskCategory:'Faults - Trees', TaskType:'Hazardous Tree', ReceivedDate: this.dateService.getDate(),
        Description: 'No power, No access issues, customer daughter onsite, meter located outside, supply unknown, mains and fuses checked, unsure of neighbors, Sheryl',
        Ranking: 0, Status:'Field Complete', Address: '2 Hellabys Rd, Otara, Auckland 2023', Visits:1},
      {NetworkId:'VN_1-2963987214', TaskCategory:'Temp Disco/Reco', TaskType:'Retailer Reco Request', ReceivedDate: this.dateService.getDate(),
        Description: 'Temp disco asap, O/H guttering work, cust is onsite. Morgan',
        Ranking: 0, Status:'Field Complete', Address: '14 Great South Road, Penrose, Auckland 1061', Visits:2},
      {NetworkId:'VN_1-2981235122', TaskCategory:'Faults - Streetlight', TaskType:'On all day', ReceivedDate: this.dateService.getDate(),
        Description: 'Engineer Comments: Found m.switch completely burnt @ m.box. Removed u.g pit fuse for safety. Prior to isolation for safety-Tested @ m.box-234V on mains cable connected to m.switch. Tested-Confirmed power isolated on mains cable m.box after removing fuse from pit. Refer Customer to HNZ. ESC is required to Reliven. Danger Tag Installed on s.cable in pit.',
        Ranking: 0, Status:'QA Complete', Address: '116 Victoria St W, Auckland, 1010', Visits:1},
      {NetworkId:'VN_1-2990876123', TaskCategory:'Faults - 3rd Party', TaskType:'Car v Transformer', ReceivedDate: this.dateService.getDate(),
        Description: 'Close Approach Required** Monday 23rd July @ 9am. This is for some footpath renewal works, Roneel would be onsite, please meet outside of #183 Whiteney Street. Working on the whole road. Digging near power poles, going to take about a month for the work here. if can please call if any issues - Dorothy',
        Ranking: 0, Status:'Sent to Owner', Address: '25 Viaduct, Ellerslie, Auckland 1051', Visits:1},
    ];

  selectedNetworkId: string;

  statusFilter: string;
  statusSelection: FormControl = new FormControl(this.statusFilter);
  status_list:Array<string> = [
    'Received',
    'Dispatched',
    'Rejected',
    'Accepted',
    'Start Travel', 
    'On Site', 
    'Access Issue', 
    'Field Cancelled', 
    'Field Complete', 
    'Synchronised', 
    'QA Complete', 
    'GIS Updated', 
    'Sent to Owner', 
    'Owner Confirmed', 
    'Owner Rejected'
    ];

  constructor(private router: Router,
    private dateService: DateService,
    private clientService: ClientService,
    private workTypeService: WorkTypeService) { 
    
      clientService.getList().subscribe(list =>{
        this.client = list.find(i => i.Code == 'Vector')
      });

      workTypeService.getList().subscribe(list =>{
        this.work = list.find(i => i.Code == 'RM')
      });
  }

  ngOnInit() {
  }

  onClickRow(row) { 
    this.router.navigate(['/rmqa/detail/']);
    //console.log(JSON.stringify(row));
  }

  applyStatusFilter(event) {

  }

  applyAddressFilter(event) {
    
  }

}
