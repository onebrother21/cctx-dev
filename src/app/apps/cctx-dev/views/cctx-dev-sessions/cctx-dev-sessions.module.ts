import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevSharedModule } from '@cctx-shared';
import { COMPONENTS ,CCTXDevSessionsRoutingModule } from './cctx-dev-sessions-routing.module';
import { CCTXDevSessionsService } from './cctx-dev-sessions.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevSessionsRoutingModule,
    CCTXDevSharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevSessionsService],
})
export class CCTXDevSessionsModule { }
