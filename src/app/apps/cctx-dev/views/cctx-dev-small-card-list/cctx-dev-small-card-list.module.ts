import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevSmallCardListRoutingModule } from './cctx-dev-small-card-list-routing.module';
import { CCTXDevSmallCardListService } from './cctx-dev-small-card-list.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevSmallCardListRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevSmallCardListService],
})
export class CCTXDevSmallCardListModule { }
