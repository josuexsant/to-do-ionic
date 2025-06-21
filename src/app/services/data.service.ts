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
  providedIn: 'root',
})
export class DataService {
  public messages: Message[] = [
    {
      fromName: 'Tarea 1',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.',
    },
    {
      fromName: 'Tarea 2',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.',
    },
    {
      fromName: 'Tarea 3',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.',
    },
    {
      fromName: 'Tarea 4',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.',
    },
    {
      fromName: 'Tarea 5',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.',
    },
    {
      fromName: 'Tarea 6',
      subject: 'Proximamente habra contenido aqui modificable ggg',
      date: '9:32 AM',
      id: 0,
      read: false,
      content: 'Tareita que debe ser tareada para tarear.',
    },
  ];

  constructor() {}

  public getMessages(): Message[] {
    return this.messages;
  }

  public getMessageById(id: number): Message {
    return this.messages[id];
  }

  public addMessage(message: Message): void {
    this.messages.push(message);
  }
  
  public updateMessage(id: number, message: Message): void {
    const index = this.messages.findIndex((m) => m.id === id);
    if (index !== -1) {
      this.messages[index] = message;
    }
  }
}
