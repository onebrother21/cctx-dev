import { Component } from '@angular/core';
import { Creasy_Session } from '@creasy-state';
import { Creasy_SessionsService } from '../messages.service';

@Component({
  selector: 'qs-session-list',
  templateUrl: './qs-session-list.component.html',
  styleUrls: ['./qs-session-list.component.scss'],
})
export class Creasy_SessionListComponent {
  title = "qs-session-list";
  items:Creasy_Session[] = this.sessions.items;
  constructor(private sessions:Creasy_SessionsService){}
  selectItem(item:Creasy_Session){console.log(item);}
}