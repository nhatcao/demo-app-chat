import { EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Chat } from 'src/app/interfaces/chat';
import { Message } from 'src/app/interfaces/message';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  @Input() message!: Message | null;
  @Output() messChange = new EventEmitter<Message | null>();
  chats!: Chat[];
  input!: object | null;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.getChat();
  }

  getChat() {
    this.chats = this.chatService.getChat();

  }

  deleteResource = () => this.input = null;

  exit = () => this.messChange.emit(null);

}
