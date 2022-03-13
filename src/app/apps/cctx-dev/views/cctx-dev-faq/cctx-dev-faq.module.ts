import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevFAQRoutingModule } from './cctx-dev-faq-routing.module';
import { CCTXDevFAQService } from './cctx-dev-faq.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevFAQRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevFAQService],
})
export class CCTXDevFAQModule { }
