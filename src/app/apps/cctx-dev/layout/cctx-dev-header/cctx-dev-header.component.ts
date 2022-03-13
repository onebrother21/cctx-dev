import { Component } from '@angular/core';
import { CCTXDevIcon } from '@cctx-shared';

@Component({
  selector: 'cctx-dev-header',
  templateUrl: './cctx-dev-header.component.html',
  styleUrls: ['./cctx-dev-header.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevHeaderComponent {
  title = "cctx-dev-header";
  item:CCTXDevIcon = {label:"Menu Button",type:"hamburger"};
}
