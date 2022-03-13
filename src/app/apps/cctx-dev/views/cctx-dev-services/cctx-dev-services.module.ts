import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { CCTXDevSharedModule } from '@cctx-shared';
import { COMPONENTS ,CCTXDevServicesRoutingModule } from './cctx-dev-services-routing.module';
import { CCTXDevServicesService } from './cctx-dev-services.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevServicesRoutingModule,
    CCTXDevSharedModule,
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevServicesService],
})
export class CCTXDevServicesModule { }
