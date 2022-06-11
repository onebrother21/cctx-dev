import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Creasy_SharedModule } from '@creasy-shared';
import { COMPONENTS,Creasy_LayoutRoutingModule } from "./layout-routing.module";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    Creasy_SharedModule,
    Creasy_LayoutRoutingModule,
  ],
  exports:[...COMPONENTS],
})

export class Creasy_LayoutModule { }
