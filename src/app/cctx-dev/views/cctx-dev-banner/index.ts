import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevBannerRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevBannerRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevBannerModule { }
