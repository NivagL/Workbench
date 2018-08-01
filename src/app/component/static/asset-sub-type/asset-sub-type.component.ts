import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

import {AssetSubType} from '../../../model/asset-sub-type'
import {AssetSubTypeService} from '../../../service/asset-sub-type.service'

@Component({
  selector: 'app-asset-sub-type',
  templateUrl: './asset-sub-type.component.html',
  styleUrls: ['./asset-sub-type.component.css']
})
export class AssetSubTypeComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  private _AssetType: number;
  @Input() set AssetType(data: number) {
    this._AssetType = data;
    this.getList();
  }
  get AssetType(): number {
    return this._AssetType;
  }

  public list: BehaviorSubject<Array<AssetSubType>>;
  public item: BehaviorSubject<AssetSubType>;

  constructor(private service: AssetSubTypeService) { 
    this.onSelected = new EventEmitter();

    let list = new Array<AssetSubType>();
    this.list = new BehaviorSubject<Array<AssetSubType>>(list);
  
    let item = new AssetSubType();
    this.item = new BehaviorSubject<AssetSubType>(item);
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

    var list = new Array<AssetSubType>();
    this.service.getLoadedList().forEach(
      item => {
        if(this.AssetType == undefined){
          list.push(item);
        } else {
          if(item.AssetType == this.AssetType) {
            list.push(item);
          }
        }
    });
    this.list.next(list);
    //this.item.next(list[0]);
  }
  
  onChange(selected: AssetSubType) {
    //this.item.next(selected);
    this.onSelected.emit(selected.Id);
  }

}
