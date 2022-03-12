import { NgModule } from '@angular/core';
import { SharedModule } from "@shared";
import { CCTXDevStateModule } from "./state";
import { CCTXDevLayoutModule } from "./layout";
import { CCTXDevRoutingModule } from './cctx-dev.routing.module';
import { CCTXDevComponent } from './cctx-dev.component';

@NgModule({
  declarations: [CCTXDevComponent],
  imports: [
    SharedModule,
    CCTXDevStateModule,
    CCTXDevLayoutModule,
    CCTXDevRoutingModule,
  ]
})

export class CCTXDevModule { }