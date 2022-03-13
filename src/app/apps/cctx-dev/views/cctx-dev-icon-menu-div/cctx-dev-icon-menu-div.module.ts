import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevIconMenuDivRoutingModule } from './cctx-dev-icon-menu-div-routing.module';
import { CCTXDevIconMenuDivService } from './cctx-dev-icon-menu-div.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevIconMenuDivRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevIconMenuDivService],
})
export class CCTXDevIconMenuDivModule { }
