import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS ,CCTXDevIconMenuDivRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevIconMenuDivRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class CCTXDevIconMenuDivModule { }
