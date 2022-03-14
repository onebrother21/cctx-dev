import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevUserDashComponent } from './cctx-dev-user-dash';
import { CCTXDevUserAccountComponent } from './cctx-dev-user-account';
import { CCTXDevUserHomeComponent } from './cctx-dev-user-home';
import { CCTXDevUserHomePreviewComponent } from './cctx-dev-user-home-preview';

const routes: Routes = [
  {path:"",redirectTo:"hm",pathMatch:"full"},
  {path:"hm",component:CCTXDevUserHomeComponent},
  {path:"dash",component:CCTXDevUserDashComponent},
  {path:"me",component:CCTXDevUserAccountComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevUserRoutingModule { }
export const COMPONENTS = [
  CCTXDevUserDashComponent,
  CCTXDevUserAccountComponent,
  CCTXDevUserHomeComponent,
  CCTXDevUserHomePreviewComponent,
];