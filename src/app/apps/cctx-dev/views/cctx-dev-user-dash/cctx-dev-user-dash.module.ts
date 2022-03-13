import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevSharedModule } from '@cctx-shared';
import { COMPONENTS ,CCTXDevUserDashRoutingModule } from './cctx-dev-user-dash-routing.module';
import { CCTXDevUserDashService } from './cctx-dev-user-dash.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevUserDashRoutingModule,
    CCTXDevSharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevUserDashService],
})
export class CCTXDevUserDashModule { }
