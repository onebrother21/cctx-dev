import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevErrorComponent } from './cctx-dev-error';

const routes: Routes = [
  {path:"",component:CCTXDevErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevErrorRoutingModule { }
export const COMPONENTS = [
  CCTXDevErrorComponent,
];