import { Component, OnInit, Input } from '@angular/core';

import { DateService } from '../../../service/date.service';

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
  
  constructor() { }

  ngOnInit() {
  }

  public damage: Damage;
  onDamage(event) {
    this.damage = event;
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
