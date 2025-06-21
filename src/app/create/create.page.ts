import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { inject } from '@angular/core';
import { DataService, Message } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
  standalone: false,
})
export class CreatePage implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private platform = inject(Platform);
  private dataService = inject(DataService);
  private router = inject(Router);
  public message!: Message;

  constructor() {}

  ngOnInit() {}

  getBackButtonText() {
    const isIos = this.platform.is('ios')
    return isIos ? 'Inbox' : '';
  }

  createMessage(fromName: string | null | undefined, content: string | null | undefined) {
    const newMessage: Message = {
      fromName: fromName || 'Unknown Sender',
      subject: 'New Message',
      date: '',
      id: Date.now(),
      read: false,
      content : content || 'No content provided',
    };
    this.dataService.addMessage(newMessage);
    this.router.navigate(['/']);
  }
}
