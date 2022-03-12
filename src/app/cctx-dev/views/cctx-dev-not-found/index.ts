import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevNotFoundRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevNotFoundRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevNotFoundModule { }
