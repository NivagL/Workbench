import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {AssetType} from '../../../model/asset-type'
import {AssetTypeService} from '../../../service/asset-type.service'

@Component({
  selector: 'app-asset-type',
  templateUrl: './asset-type.component.html',
  styleUrls: ['./asset-type.component.css']
})
export class AssetTypeComponent implements OnInit {
  public list: Observable<Array<AssetType>>;
  public item: AssetType;

  constructor(private service: AssetTypeService) { 
    this.list = service.getList();
  }

  ngOnInit() {
  }

}
