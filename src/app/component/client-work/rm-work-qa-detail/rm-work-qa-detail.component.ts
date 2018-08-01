import { Component, OnInit, Input } from '@angular/core';

import { DateService } from '../../../service/date.service';
import { AssetFault } from '../../../model/asset-fault';

import { Client } from '../../../model/client';
import { ClientService } from '../../../service/client.service';

import { WorkType } from '../../../model/work-type';
import { WorkTypeService } from '../../../service/work-type.service';

import { Damage } from '../../../model/damage';
import { DamageCause } from '../../../model/damage-cause';
import { DamageSubCause } from '../../../model/damage-sub-cause';


@Component({
  selector: 'app-rm-work-qa-detail',
  templateUrl: './rm-work-qa-detail.component.html',
  styleUrls: ['./rm-work-qa-detail.component.css']
})
export class RmWorkQaDetailComponent implements OnInit {
  @Input() work: WorkType;
  @Input() client: Client;
  assetFault: AssetFault;
  
  constructor() { 
    this.assetFault = new AssetFault();
    this.assetFault.NetworkId = 2;
    this.assetFault.AssetTypeId = 1;
    this.assetFault.AssetSubTypeId = 1;
    this.assetFault.DamageId = 1;
    this.assetFault.CauseId = 1;
    this.assetFault.SubCauseId = 1;
    this.assetFault.TaskCategoryId = 1;
    this.assetFault.TaskTypeId = 1;
  }

  ngOnInit() {
  }

  onNetworkType(Id: number) {
    console.log('setting network id:' + Id);
    this.assetFault.NetworkId = Id;
  }

  onAssetType(Id: number) {
    console.log('setting asset type id:' + Id);
    this.assetFault.AssetTypeId = Id;
  }
  
  onAssetSubType(Id: number) {
    console.log('setting asset sub type id:' + Id);
    this.assetFault.AssetSubTypeId = Id;
  }
  
  onDamage(Id: number) {
    console.log('setting damage id:' + Id);
    this.assetFault.DamageId = Id;
  }

  onCause(Id: number) {
    console.log('setting cause id:' + Id);
    this.assetFault.CauseId = Id;
  }

  onSubCause(Id: number) {
    console.log('setting sub cause id:' + Id);
    this.assetFault.SubCauseId = Id;
  }

  onTaskCategory(Id: number) {
    console.log('setting task category id:' + Id);
    this.assetFault.TaskCategoryId = Id;
  }

  onTaskType(Id: number) {
    console.log('setting task type id:' + Id);
    this.assetFault.TaskTypeId = Id;
  }
}
