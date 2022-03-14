import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevSharedModule } from '@cctx-shared';
import { COMPONENTS ,CCTXDevHomeRoutingModule } from './cctx-dev-home-routing.module';
import { CCTXDevHomeService } from './cctx-dev-home.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevHomeRoutingModule,
    CCTXDevSharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevHomeService],
})
export class CCTXDevHomeModule { }
