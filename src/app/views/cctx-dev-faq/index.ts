import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevFAQRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevFAQRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevFAQModule { }
