import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevSinglePageRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevSinglePageRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevSinglePageModule { }
