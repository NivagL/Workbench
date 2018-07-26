import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {NetworkType} from '../../../model/network-type'
import {NetworkTypeService} from '../../../service/network-type.service'

@Component({
  selector: 'app-network-type',
  templateUrl: './network-type.component.html',
  styleUrls: ['./network-type.component.css']
})
export class NetworkTypeComponent implements OnInit {
  public list: Observable<Array<NetworkType>>;
  public item: NetworkType;

  constructor(private service: NetworkTypeService) { 
    this.list = service.getList();
  }

  ngOnInit() {
  }

}
