import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevSmallCardListRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevSmallCardListRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevSmallCardListModule { }
