import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevAuthRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevAuthRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevAuthModule { }
