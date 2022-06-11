import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"qs",pathMatch:"full"},
  //{path:"qs",loadChildren: () => import("./apps/qs").then(m => m.QS_Module)},
  {path:"creasy",loadChildren: () => import("./apps/creasy").then(m => m.Creasy_Module)},
  //{path:"**",loadChildren: () => import("./apps/qs/views/qs-error").then(m => m.QS_ErrorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
