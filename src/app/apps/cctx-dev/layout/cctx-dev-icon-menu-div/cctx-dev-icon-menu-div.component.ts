import { Component } from '@angular/core';
import { CCTXDevIcon } from '@cctx-state';
import { CCTXDevIconMenuDivService } from '../cctx-dev-icon-menu-div.service';

@Component({
  selector: 'cctx-dev-icon-menu-div',
  templateUrl: './cctx-dev-icon-menu-div.component.html',
  styleUrls: ['./cctx-dev-icon-menu-div.component.scss'],
})
export class CCTXDevIconMenuDivComponent {
  title = "cctx-dev-icon-menu-div";
  menu:CCTXDevIcon[] = this.iconMenuDiv.menu;
  constructor(private iconMenuDiv:CCTXDevIconMenuDivService){}
  selectItem(item:CCTXDevIcon){console.log(item);}
}