import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevSinglePageRoutingModule } from './cctx-dev-single-page-routing.module';
import { CCTXDevSinglePageService } from './cctx-dev-single-page.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevSinglePageRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevSinglePageService],
})
export class CCTXDevSinglePageModule { }
