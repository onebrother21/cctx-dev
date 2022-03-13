import { Component } from '@angular/core';
import { CCTXDevIcon } from '@cctx-state';
import { CCTXDevUserService } from '../cctx-dev-user.service';

@Component({
  selector: 'cctx-dev-user-dash',
  templateUrl: './cctx-dev-user-dash.component.html',
  styleUrls: ['./cctx-dev-user-dash.component.scss'],
})
export class CCTXDevUserDashComponent {
  title = "cctx-dev-user-dash";
  menu:CCTXDevIcon[] = this.user.menu;
  constructor(private user:CCTXDevUserService){}
  selectItem(item:CCTXDevIcon){console.log(item);}
}
