import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevAuthService } from './cctx-dev-auth.service';
import { COMPONENTS,CCTXDevAuthRoutingModule } from './cctx-dev-auth-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevAuthRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevAuthService],
})
export class CCTXDevAuthModule { }
