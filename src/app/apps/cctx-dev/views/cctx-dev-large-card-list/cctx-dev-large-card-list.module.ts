import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevLargeCardListRoutingModule } from './cctx-dev-large-card-list-routing.module';
import { CCTXDevLargeCardListService } from './cctx-dev-large-card-list.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevLargeCardListRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevLargeCardListService],
})
export class CCTXDevLargeCardListModule { }
