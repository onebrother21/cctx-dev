import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { Creasy_SharedModule } from '@creasy-shared';
import { Creasy_SessionsCommentsService } from './messages-reply.service';
import { COMPONENTS ,Creasy_SessionsRoutingModule } from './messages-routing.module';
import { Creasy_SessionsService } from './messages.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    Creasy_SessionsRoutingModule,
    Creasy_SharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[Creasy_SessionsService,Creasy_SessionsCommentsService],
})
export class Creasy_SessionsModule { }
