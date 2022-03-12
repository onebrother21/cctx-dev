import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevUserDashComponent } from './cctx-dev-user-dash';

const routes: Routes = [
  {path:"",component:CCTXDevUserDashComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevUserDashRoutingModule { }
export const COMPONENTS = [
  CCTXDevUserDashComponent,
];