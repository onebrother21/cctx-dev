import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevLargeCardListRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevLargeCardListRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevLargeCardListModule { }
