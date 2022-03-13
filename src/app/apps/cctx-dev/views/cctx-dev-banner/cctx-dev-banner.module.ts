import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevBannerRoutingModule } from './cctx-dev-banner-routing.module';
import { CCTXDevBannerService } from './cctx-dev-banner.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevBannerRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevBannerService],
})
export class CCTXDevBannerModule { }
