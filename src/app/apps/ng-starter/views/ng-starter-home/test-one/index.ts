import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS,TestOneRoutingModule } from './routing';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    TestOneRoutingModule
  ],
  exports:[...COMPONENTS],
})
export class TestOneModule { }
