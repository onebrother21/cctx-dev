import { Component,ViewEncapsulation } from '@angular/core';
import { CCTXDevIcon, ICONS } from '../../../shared';

@Component({
  selector: 'cctx-dev-user-dash',
  templateUrl: './cctx-dev-user-dash.component.html',
  styleUrls: ['./cctx-dev-user-dash.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevUserDashComponent {
  title = "cctx-dev-user-dash";
  menu:CCTXDevIcon[] = ICONS;
  selectItem(item:CCTXDevIcon){console.log(item);}
}
