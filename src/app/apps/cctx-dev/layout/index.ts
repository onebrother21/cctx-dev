import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevSharedModule } from '@cctx-shared';
import { COMPONENTS,CCTXDevLayoutRoutingModule } from "./routing";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevSharedModule,
    CCTXDevLayoutRoutingModule,
  ],
  exports:[...COMPONENTS],
})

export class CCTXDevLayoutModule { }
