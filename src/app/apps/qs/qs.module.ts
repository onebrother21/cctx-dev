import { NgModule } from '@angular/core';
import { SharedModule } from "@shared";
import { QS_SharedModule } from "./shared";
import { QS_StateModule } from "./state";
import { QS_LayoutModule } from "./layout";
import { QS_RoutingModule } from './qs-routing.module';
import { QS_Component } from './qs.component';

@NgModule({
  declarations: [QS_Component],
  imports: [
    SharedModule,
    QS_SharedModule,
    QS_StateModule,
    QS_LayoutModule,
    QS_RoutingModule,
  ]
})

export class QS_Module { }