import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevHomeComponent } from './cctx-dev-home';

const routes: Routes = [
  {path:"",component:CCTXDevHomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevHomeRoutingModule { }
export const COMPONENTS = [
  CCTXDevHomeComponent,
];