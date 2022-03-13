import { Component } from '@angular/core';
import { CCTXDevIcon } from '@cctx-state';
import { CCTXDevServicesService } from '../cctx-dev-services.service';

@Component({
  selector: 'cctx-dev-services-dash',
  templateUrl: './cctx-dev-services-dash.component.html',
  styleUrls: ['./cctx-dev-services-dash.component.scss'],
})
export class CCTXDevServicesDashComponent {
  title = "cctx-dev-services-dash";
  menu:CCTXDevIcon[] = this.services.menu;
  constructor(private services:CCTXDevServicesService){}
  selectItem(item:CCTXDevIcon){console.log(item);}
}
