import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevContactUsRoutingModule } from './cctx-dev-contact-us-routing.module';
import { CCTXDevContactUsService } from './cctx-dev-contact-us.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevContactUsRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevContactUsService],
})
export class CCTXDevContactUsModule { }
