import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,Creasy_ErrorRoutingModule } from './error-routing.module';
import { Creasy_ErrorService } from './error.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    Creasy_ErrorRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[Creasy_ErrorService],
})
export class Creasy_ErrorModule { }