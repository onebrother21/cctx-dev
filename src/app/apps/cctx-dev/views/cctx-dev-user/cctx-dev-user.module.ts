import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevSharedModule } from '@cctx-shared';
import { COMPONENTS ,CCTXDevUserRoutingModule } from './cctx-dev-user-routing.module';
import { CCTXDevUserService } from './cctx-dev-user.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevUserRoutingModule,
    CCTXDevSharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevUserService],
})
export class CCTXDevUserModule { }
