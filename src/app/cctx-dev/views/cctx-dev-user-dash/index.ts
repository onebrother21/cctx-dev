import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevUserDashRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevUserDashRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevUserDashModule { }
