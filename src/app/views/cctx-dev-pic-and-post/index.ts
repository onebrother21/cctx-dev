import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevPicAndPostRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevPicAndPostRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevPicAndPostModule { }
