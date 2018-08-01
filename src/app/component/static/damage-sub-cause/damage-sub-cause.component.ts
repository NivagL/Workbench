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
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;
  
  private _CauseId: number;
  @Input() set CauseId(data: number) {
    this._CauseId = data;
    this.getList();
  }
  get CauseId(): number {
    return this._CauseId;
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

    var list = new Array<DamageSubCause>();
    this.service.getLoadedList().forEach(
      item => {
        if(this.CauseId == undefined){
          list.push(item);
        } else {
          if(item.CauseId == this.CauseId) {
            list.push(item);
          }
        }
    });
    this.list.next(list);
    this.item.next(list[0]);
  }

  onSelection(selected: DamageSubCause) {
    this.item.next(selected);
    this.onSelected.emit(selected.Id);
  }
}
