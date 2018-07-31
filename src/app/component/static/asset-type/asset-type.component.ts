import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {AssetType} from '../../../model/asset-type'
import {AssetTypeService} from '../../../service/asset-type.service'

@Component({
  selector: 'app-asset-type',
  templateUrl: './asset-type.component.html',
  styleUrls: ['./asset-type.component.css']
})
export class AssetTypeComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  public list: Observable<Array<AssetType>>;
  public item: AssetType;

  constructor(private service: AssetTypeService) { 
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

  onChange(selected: AssetType) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
