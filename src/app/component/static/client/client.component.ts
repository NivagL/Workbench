import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

import {Client} from '../../../model/client'
import {ClientService} from '../../../service/client.service'

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  public list: Observable<Array<Client>>;
  public item: Observable<Client>;

  constructor(private service: ClientService) { 
    this.list = service.getList();
    this.item = service.getItem();
  }

  ngOnInit() {
  }

}
