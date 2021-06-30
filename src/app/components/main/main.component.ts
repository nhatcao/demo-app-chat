import { Component, OnInit } from '@angular/core';
import { Message } from 'src/app/interfaces/message';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  messages!: Message[];
  selectedMessage!: Message | null;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
    this.getMessages();
  }

  getMessages() {
    this.messages = this.messageService.getMessage();

  }

  selected(message: Message) { 
    this.selectedMessage = message;

  }

}
