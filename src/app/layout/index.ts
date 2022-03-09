import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { CoreLayoutRoutingModule } from './routing';
import { COMPONENTS } from "./components";




@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CoreLayoutRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CoreLayoutModule { }
