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
  @Input() damage: Damage;
  @Output() onSelected: EventEmitter<Damage>;
  public list: Observable<Array<Damage>>;

  constructor(private service: DamageService) { 
    this.onSelected = new EventEmitter();
    this.list = service.getList();
  }

  ngOnInit() {
  }

  onSelection(selected: Damage) {
    this.damage = selected;
    this.onSelected.emit(selected);
  }

}
