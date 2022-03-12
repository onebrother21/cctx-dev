import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevBannerComponent } from './cctx-dev-banner';

const routes: Routes = [
  {path:"",component:CCTXDevBannerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevBannerRoutingModule { }
export const COMPONENTS = [
  CCTXDevBannerComponent,
];