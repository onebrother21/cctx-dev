import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevContactUsRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevContactUsRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevContactUsModule { }
