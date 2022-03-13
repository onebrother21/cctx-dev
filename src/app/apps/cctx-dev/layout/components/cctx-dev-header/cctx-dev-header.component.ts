import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cctx-dev-header',
  templateUrl: './cctx-dev-header.component.html',
  styleUrls: ['./cctx-dev-header.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevHeaderComponent {
  title = "cctx-dev-header";
}
