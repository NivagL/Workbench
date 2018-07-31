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
    this.assetFault.NetworkId = 1;
    this.assetFault.AssetTypeId = 1;
    this.assetFault.AssetSubTypeId = 1;
    this.assetFault.DamageId = 1;
  }

  ngOnInit() {
  }

  onNetworkType(Id) {
    console.log('setting network id:' + Id);
    this.assetFault.NetworkId = Id;
  }

  onAssetType(Id) {
    console.log('setting asset type id:' + Id);
    this.assetFault.AssetTypeId = Id;
  }
  
  onAssetSubType(Id) {
    console.log('setting asset sub type id:' + Id);
    this.assetFault.AssetSubTypeId = Id;
  }
  
  onDamage(Id) {
    console.log('setting damage id:' + Id);
    this.assetFault.DamageId = Id;
  }

  public cause: DamageCause;
  onCause(event) {
    this.cause = event;
  }

  public subcause: DamageSubCause;
  onSubCause(event) {
    this.cause = event;
  }
}
