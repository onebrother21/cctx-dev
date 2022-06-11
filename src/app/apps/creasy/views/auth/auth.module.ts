import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Creasy_AuthService } from './auth.service';
import { COMPONENTS,Creasy_AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    Creasy_AuthRoutingModule,
  ],
  exports:[...COMPONENTS],
  providers:[Creasy_AuthService],
})
export class Creasy_AuthModule { }
