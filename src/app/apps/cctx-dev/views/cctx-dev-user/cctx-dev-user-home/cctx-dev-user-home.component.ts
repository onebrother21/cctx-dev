import { Component } from '@angular/core';
import { CCTXDevSessionRoom } from '@cctx/shared';
import { CCTXDevUserService } from '../cctx-dev-user.service';

@Component({
  selector: 'cctx-dev-user-home',
  templateUrl: './cctx-dev-user-home.component.html',
  styleUrls: ['./cctx-dev-user-home.component.scss'],
})
export class CCTXDevUserHomeComponent {
  title = "cctx-dev-user-home";
  previews:CCTXDevSessionRoom[] = this.user.previews;
  ads:{header:string;content:string}[] = this.user.ads;
  constructor(private user:CCTXDevUserService){}
}
