import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",loadChildren: () => import("./views/cctx-dev").then(m => m.CCTXDevModule)},
  {path:"hm",loadChildren: () => import("./views/home").then(m => m.HomeModule)},
  {path:"test-one",loadChildren: () => import("./views/test-one").then(m => m.TestOneModule)},
  {path:"test-two",loadChildren: () => import("./views/test-two").then(m => m.TestTwoModule)},
  //{path:"nitch",loadChildren: () => import("./apps/nitch").then(m => m.NitchModule)},
  //{path:"**",loadChildren: () => import("./views/not-found").then(m => m.NotFoundModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
