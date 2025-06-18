import { Injectable } from '@angular/core';

export interface Message {
  fromName: string;
  subject: string;
  date: string;
  id: number;
  read: boolean;
  content: string; // Added content field for message body
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Tarea 1',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.'
    },
  ];

  constructor() { }

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }
}
