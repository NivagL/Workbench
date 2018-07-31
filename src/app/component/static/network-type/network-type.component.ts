import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {NetworkType} from '../../../model/network-type'
import {NetworkTypeService} from '../../../service/network-type.service'

@Component({
  selector: 'app-network-type',
  templateUrl: './network-type.component.html',
  styleUrls: ['./network-type.component.css']
})
export class NetworkTypeComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  public list: Observable<Array<NetworkType>>;
  public item: NetworkType;

  constructor(private service: NetworkTypeService) { 
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

  onChange(selected: NetworkType) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
