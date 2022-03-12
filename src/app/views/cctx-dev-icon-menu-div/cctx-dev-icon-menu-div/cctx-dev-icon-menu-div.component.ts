import { Component,ViewEncapsulation } from '@angular/core';
import { CCTXDevIcon, ICONS } from '../../../shared';

@Component({
  selector: 'cctx-dev-icon-menu-div',
  templateUrl: './cctx-dev-icon-menu-div.component.html',
  styleUrls: ['./cctx-dev-icon-menu-div.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevIconMenuDivComponent {
  title = "cctx-dev-icon-menu-div";
  menu:CCTXDevIcon[] = ICONS;
}