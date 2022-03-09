import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevModule { }
