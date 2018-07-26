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
  @Input() damageCause: DamageCause;
  @Output() onSelected: EventEmitter<DamageCause>;

  public list: Observable<Array<DamageCause>>;

  constructor(private service: DamageCauseService) { 
    this.onSelected = new EventEmitter();
  }

  ngOnInit() {
    this.list = this.service.getList();
  }

  onSelection(selected: DamageCause) {
    this.damageCause = selected;
    this.onSelected.emit(selected);
  }
}
