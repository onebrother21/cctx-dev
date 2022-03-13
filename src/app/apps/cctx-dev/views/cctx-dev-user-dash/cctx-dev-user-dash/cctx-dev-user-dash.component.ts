import { Component } from '@angular/core';
import { CCTXDevIcon } from '@cctx-state';
import { CCTXDevUserDashService } from '../cctx-dev-user-dash.service';

@Component({
  selector: 'cctx-dev-user-dash',
  templateUrl: './cctx-dev-user-dash.component.html',
  styleUrls: ['./cctx-dev-user-dash.component.scss'],
})
export class CCTXDevUserDashComponent {
  title = "cctx-dev-user-dash";
  menu:CCTXDevIcon[] = this.userDash.menu;
  constructor(private userDash:CCTXDevUserDashService){}
  selectItem(item:CCTXDevIcon){console.log(item);}
}
