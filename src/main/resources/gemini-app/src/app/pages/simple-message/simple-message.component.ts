import { Component, OnInit } from '@angular/core';

import { SimpleMessage } from './../../model/simple-message';
import { SimpleMessageService } from 'src/app/service/simple-message.service';

@Component({
  selector: 'app-simple-message',
  templateUrl: './simple-message.component.html',
  styleUrls: ['./simple-message.component.scss'],
})
export class SimpleMessageComponent implements OnInit {
  public currentMessage: SimpleMessage;
  public showMessage: boolean = false;

  constructor(private simpleMessageService: SimpleMessageService) {
    this.monitorMessageRequests();
  }

  ngOnInit(): void {}

  public monitorMessageRequests = () => {
    this.simpleMessageService
      .getEmitterMessagesRequest()
      .subscribe((simpleMessage: SimpleMessage) => {
        this.showMessage = true;
        this.currentMessage = simpleMessage;
      });
  };

  public close = (alert) => {
    this.showMessage = false;
  };
}
