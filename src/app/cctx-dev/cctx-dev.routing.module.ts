import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevComponent } from './cctx-dev.component';

const routes: Routes = [
  {path:"",component:CCTXDevComponent,children:[
    {path:"",redirectTo:"hm",pathMatch:"full",},
    {path:"hm",loadChildren: () => import("./views/cctx-dev-banner").then(m => m.CCTXDevBannerModule)},
    {path:"dash",loadChildren: () => import("./views/cctx-dev-user-dash").then(m => m.CCTXDevUserDashModule)},
    {path:"secure01",loadChildren: () => import("./views/cctx-dev-auth").then(m => m.CCTXDevAuthModule)},
    {path:"faq",loadChildren: () => import("./views/cctx-dev-faq").then(m => m.CCTXDevFAQModule)},
    {path:"contact",loadChildren: () => import("./views/cctx-dev-contact-us").then(m => m.CCTXDevContactUsModule)},
    {path:"**",loadChildren: () => import("./views/cctx-dev-not-found").then(m => m.CCTXDevNotFoundModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevRoutingModule { }