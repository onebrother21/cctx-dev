import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevComponent } from './cctx-dev';

const routes: Routes = [
  {path:"",component:CCTXDevComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevRoutingModule { }
export const COMPONENTS = [
  CCTXDevComponent,
];