import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevIconMenuDivComponent } from './cctx-dev-icon-menu-div';

const routes: Routes = [
  {path:"",component:CCTXDevIconMenuDivComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevIconMenuDivRoutingModule { }
export const COMPONENTS = [
  CCTXDevIconMenuDivComponent,
];