import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared';
import { COMPONENTS,TestTwoRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    TestTwoRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class TestTwoModule { }
