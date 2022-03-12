import { NgModule } from '@angular/core';
import { CoreLayoutModule } from '../../layout';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevRoutingModule,
    CoreLayoutModule,

  ],
  exports:[...COMPONENTS],
})
export class CCTXDevModule { }
