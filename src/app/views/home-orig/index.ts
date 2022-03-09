import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,HomeOrigRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    HomeOrigRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class HomeOrigModule { }
