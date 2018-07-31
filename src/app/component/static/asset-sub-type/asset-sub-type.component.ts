import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

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

  public list: Observable<Array<AssetSubType>>;
  public item: AssetSubType;

  constructor(private service: AssetSubTypeService) { 
    this.list = service.getList();
    this.onSelected = new EventEmitter();
  }

  ngOnInit() {
    //get the item from the list based on the input
    this.list.subscribe(list => {
      list.forEach(item => {
        if(item.Id == this.Id) {
          this.item = item;
          return;
        }
      }); 
      if(this.Id == undefined) {
        this.Id = list[0].Id;
      }
    });
  }

  onChange(selected: AssetSubType) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
