import { Component } from '@angular/core';
import { CCTXDevMediaSession } from '@cctx-state';
import { CCTXDevSessionsService } from '../cctx-dev-sessions.service';

@Component({
  selector: 'cctx-dev-session-list',
  templateUrl: './cctx-dev-session-list.component.html',
  styleUrls: ['./cctx-dev-session-list.component.scss'],
})
export class CCTXDevSessionListComponent {
  title = "cctx-dev-session-list";
  items:CCTXDevMediaSession[] = this.sessions.items;
  constructor(private sessions:CCTXDevSessionsService){}
  selectItem(item:CCTXDevMediaSession){console.log(item);}
}