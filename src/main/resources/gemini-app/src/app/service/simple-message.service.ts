import { SimpleMessage } from './../model/simple-message';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

import { LoginUser } from '../model/login-user';

@Injectable({
  providedIn: 'root',
})
export class SimpleMessageService {
  private showSimpleMessageEventEmitter: EventEmitter<SimpleMessage>;

  constructor() {
    this.showSimpleMessageEventEmitter = new EventEmitter();
  }

  public showSimpleMessage = (message: SimpleMessage) => {
    this.showSimpleMessageEventEmitter.emit(message);
  };

  public getEmitterMessagesRequest = () => {
    return this.showSimpleMessageEventEmitter;
  };
}
