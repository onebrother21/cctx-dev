import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Creasy_SharedModule } from '@creasy-shared';
import { COMPONENTS ,Creasy_HomeRoutingModule } from './home-routing.module';
import { Creasy_HomeService } from './home.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    Creasy_HomeRoutingModule,
    Creasy_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[Creasy_HomeService],
})
export class Creasy_HomeModule { }
