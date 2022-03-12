import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevComponent } from './cctx-dev';

const routes: Routes = [
  {path:"",component:CCTXDevComponent,redirectTo:"dash",pathMatch:"full"},
  {path:"dash",loadChildren: () => import("../cctx-dev-user-dash").then(m => m.CCTXDevUserDashModule)},
  {path:"secure01",loadChildren: () => import("../cctx-dev-auth").then(m => m.CCTXDevAuthModule)},
  {path:"faq",loadChildren: () => import("../cctx-dev-faq").then(m => m.CCTXDevFAQModule)},
  {path:"contact",loadChildren: () => import("../cctx-dev-contact-us").then(m => m.CCTXDevContactUsModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevRoutingModule { }
export const COMPONENTS = [
  CCTXDevComponent,
];