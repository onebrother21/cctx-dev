import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevComponent } from './cctx-dev.component';

const routes: Routes = [
  {path:"",component:CCTXDevComponent,children:[
    {path:"",loadChildren: () => import("./views/cctx-dev-banner").then(m => m.CCTXDevBannerModule)},
    {path:"user",loadChildren: () => import("./views/cctx-dev-user").then(m => m.CCTXDevUserModule)},
    {path:"secur01",loadChildren: () => import("./views/cctx-dev-auth").then(m => m.CCTXDevAuthModule)},
    {path:"sessions",loadChildren: () => import("./views/cctx-dev-sessions").then(m => m.CCTXDevSessionsModule)},
    {path:"services",loadChildren: () => import("./views/cctx-dev-services").then(m => m.CCTXDevServicesModule)},
    {path:"**",loadChildren: () => import("./views/cctx-dev-error").then(m => m.CCTXDevErrorModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevRoutingModule { }