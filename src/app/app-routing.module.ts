import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",redirectTo:"cctx",pathMatch:"full"},
  {path:"cctx",loadChildren: () => import("./views/cctx-dev").then(m => m.CCTXDevModule)},
  {path:"hm",loadChildren: () => import("./views/ng-starter-home").then(m => m.HomeModule)},
  {path:"test-one",loadChildren: () => import("./views/test-one").then(m => m.TestOneModule)},
  {path:"test-two",loadChildren: () => import("./views/test-two").then(m => m.TestTwoModule)},
  //{path:"nitch",loadChildren: () => import("./apps/nitch").then(m => m.NitchModule)},
  {path:"**",loadChildren: () => import("./views/cctx-dev-not-found").then(m => m.CCTXDevNotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
