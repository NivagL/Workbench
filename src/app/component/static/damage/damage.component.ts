import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {Damage} from '../../../model/damage'
import {DamageService} from '../../../service/damage.service'

@Component({
  selector: 'app-damage',
  templateUrl: './damage.component.html',
  styleUrls: ['./damage.component.css']
})
export class DamageComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  public list: Observable<Array<Damage>>;
  public item: Damage;

  constructor(private service: DamageService) { 
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

  onChange(selected: Damage) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
