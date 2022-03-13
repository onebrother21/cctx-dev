import { Component } from '@angular/core';
import { CCTXDevIcon, ICONS } from '@cctx-state';

@Component({
  selector: 'cctx-dev-user-dash',
  templateUrl: './cctx-dev-user-dash.component.html',
  styleUrls: ['./cctx-dev-user-dash.component.scss'],
})
export class CCTXDevUserDashComponent {
  title = "cctx-dev-user-dash";
  menu:CCTXDevIcon[] = ICONS;
  selectItem(item:CCTXDevIcon){console.log(item);}
}
