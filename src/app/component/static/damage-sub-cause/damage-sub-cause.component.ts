import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

import {DamageCause} from '../../../model/damage-cause'
import {DamageSubCause} from '../../../model/damage-sub-cause'
import {DamageSubCauseService} from '../../../service/damage-sub-cause.service'

@Component({
  selector: 'app-damage-sub-cause',
  templateUrl: './damage-sub-cause.component.html',
  styleUrls: ['./damage-sub-cause.component.css']
})
export class DamageSubCauseComponent implements OnInit {
  @Input() damageSubCause: DamageSubCause;
  @Output() onSelected: EventEmitter<DamageSubCause>;
  
  private _cause: DamageCause;
  @Input() set cause(data: DamageCause) {
    this._cause = data;
    this.getList();
  }
  get cause(): DamageCause {
    return this._cause;
  }

  public list: BehaviorSubject<Array<DamageSubCause>>;
  public item: BehaviorSubject<DamageSubCause>;

  constructor(private service: DamageSubCauseService) { 
    this.onSelected = new EventEmitter();
    let list = new Array<DamageSubCause>();
    this.list = new BehaviorSubject<Array<DamageSubCause>>(list);
    let item = new DamageSubCause();
    this.item = new BehaviorSubject<DamageSubCause>(item);
  }

  ngOnInit() { 
    this.getList();
  }

  private subscription: any;
  getList() {
    //TODO **GL**
    // if(this.subscription != undefined) {
    //   this.subscription.unsubscribe();
    // }

    this.service.getLoadedList().forEach(
      item => {
        var list = new Array<DamageSubCause>();
        if(this.cause == undefined){
          list.push(item);
        } else {
          if(item.CauseId == this.cause.Id) {
            list.push(item);
          }
        }
        this.list.next(list);
        this.item.next(list[0]);
    });
  }

  onSelection(selected: DamageSubCause) {
    this.damageSubCause = selected;
    this.onSelected.emit(selected);
  }
}
