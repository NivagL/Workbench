import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs';

import {DamageCause} from '../../../model/damage-cause'
import {DamageCauseService} from '../../../service/damage-cause.service'

@Component({
  selector: 'app-damage-cause',
  templateUrl: './damage-cause.component.html',
  styleUrls: ['./damage-cause.component.css']
})
export class DamageCauseComponent implements OnInit {
  @Input() Id: number;
  @Output() onSelected: EventEmitter<number>;

  public list: Observable<Array<DamageCause>>;
  public item: DamageCause;

  constructor(private service: DamageCauseService) { 
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

  onChange(selected: DamageCause) {
    this.item = selected;
    this.onSelected.emit(this.item.Id);
  }

}
