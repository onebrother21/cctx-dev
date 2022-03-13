import { Component } from '@angular/core';
import { CCTXDevIcon, ICONS } from '@cctx-state';

@Component({
  selector: 'cctx-dev-icon-menu-div',
  templateUrl: './cctx-dev-icon-menu-div.component.html',
  styleUrls: ['./cctx-dev-icon-menu-div.component.scss'],
})
export class CCTXDevIconMenuDivComponent {
  title = "cctx-dev-icon-menu-div";
  menu:CCTXDevIcon[] = ICONS;
}