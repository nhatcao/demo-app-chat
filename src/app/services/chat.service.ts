import { Injectable } from '@angular/core';
import { Chat } from '../interfaces/chat';
import { chats } from '../mock-chats';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  getChat(): Chat[] {
    return chats;

  }
}
