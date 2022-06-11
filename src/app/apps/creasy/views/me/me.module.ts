import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Creasy_SharedModule } from '@creasy-shared';
import { COMPONENTS ,Creasy_UserRoutingModule } from './me-routing.module';
import { Creasy_UserService } from './me.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    Creasy_UserRoutingModule,
    Creasy_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[Creasy_UserService],
})
export class Creasy_UserModule { }
