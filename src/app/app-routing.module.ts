import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"qs",pathMatch:"full"},
  {path:"qs",loadChildren: () => import("./apps/qs").then(m => m.QS_Module)},
  //{path:"hm",loadChildren: () => import("./ng-starter").then(m => m.HomeModule)},
  //{path:"test-one",loadChildren: () => import("./views/test-one").then(m => m.TestOneModule)},
  //{path:"test-two",loadChildren: () => import("./views/test-two").then(m => m.TestTwoModule)},
  //{path:"nitch",loadChildren: () => import("./apps/nitch").then(m => m.NitchModule)},
  {path:"**",loadChildren: () => import("./apps/qs/views/qs-error").then(m => m.QS_ErrorModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
