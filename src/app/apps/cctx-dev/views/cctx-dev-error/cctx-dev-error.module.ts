import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevErrorRoutingModule } from './cctx-dev-error-routing.module';
import { CCTXDevErrorService } from './cctx-dev-error.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevErrorRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevErrorService],
})
export class CCTXDevErrorModule { }