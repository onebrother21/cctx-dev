import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS ,CCTXDevPicAndPostRoutingModule } from './cctx-dev-pic-and-post-routing.module';
import { CCTXDevPicAndPostService } from './cctx-dev-pic-and-post.service';

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    SharedModule,
    CCTXDevPicAndPostRoutingModule
  ],
  exports:[...COMPONENTS],
  providers:[CCTXDevPicAndPostService],
})
export class CCTXDevPicAndPostModule { }
