import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,HomeRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    HomeRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class HomeModule { }
