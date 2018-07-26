import { Component, OnInit } from '@angular/core';
import { HubConnection } from '@aspnet/signalr';
import * as signalR from '@aspnet/signalr';
import { Client } from '../../model/client';
import { jsonpCallbackContext } from '@angular/common/http/src/module';
 
@Component({
  selector: 'app-chat-home',
  templateUrl: './chat-home.component.html',
  styleUrls: ['./chat-home.component.css']
})
export class ChatHomeComponent implements OnInit {
  private hubConnection: HubConnection | undefined;
  public async: any;
  message = '';
  messages: string[] = [];

  constructor() {
  }

  public sendMessage(): void {
      //const data = `Sent: ${this.message}`;

      if (this.hubConnection) {
          this.hubConnection.invoke('Send', this.message);
      }
      //this.messages.push(data);
  }

  public sendClient(): void {
    //const data = `Sent: ${this.message}`;

    let client: Client = new Client();

    client.Id = 99;
    client.Code = 'Burp';
    client.Text = 'Burp Client';
    client.Region = 'Auckland';

    if (this.hubConnection) {
        this.hubConnection.invoke('Client', client);
    }
    //this.messages.push(data);
}

  ngOnInit() {
      this.hubConnection = new signalR.HubConnectionBuilder()
          .withUrl('http://localhost:51814/Events')
          .configureLogging(signalR.LogLevel.Information)
          .build();

      this.hubConnection.start().catch(err => console.error(err.toString()));

      this.hubConnection.on('Send', (data: any) => {
          const received = `Received: ${data}`;
          this.messages.push(received);
      });

      this.hubConnection.on('Client', (data: Client) => {
        //const received = `Received: ${data}`;
        this.messages.push(JSON.stringify(data));
      });
    }
}