import { Injectable } from '@angular/core';
import { messages } from '../mock-messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessage() {
    return messages;

  }
}
