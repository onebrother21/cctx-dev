import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_Component } from './app.component';

const routes: Routes = [
  {path:"",component:Creasy_Component,children:[
    {path:"",loadChildren: () => import("./views/home").then(m => m.Creasy_HomeModule)},
    {path:"me",loadChildren: () => import("./views/me").then(m => m.Creasy_UserModule)},
    {path:"secur01",loadChildren: () => import("./views/auth").then(m => m.Creasy_AuthModule)},
    {path:"**",loadChildren: () => import("./views/error").then(m => m.Creasy_ErrorModule)},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_RoutingModule { }