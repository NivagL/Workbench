import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import { Id } from './../../model/Id'
import { DataService } from './../../service/data.service'

export class StaticDataComponent<TModel extends Id, TModelService extends DataService<TModel>> implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  public list: Observable<Array<TModel>>;
  public item: TModel;

  constructor(private service: TModelService) { 
    this.onSelected = new EventEmitter();
  }

  ngOnInit() {
    //get the item from the list based on the input
    this.list = this.service.getList();
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

  onChange(selected: TModel) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
