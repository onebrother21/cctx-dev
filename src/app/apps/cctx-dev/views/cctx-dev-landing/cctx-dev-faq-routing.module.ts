import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevFAQComponent } from './cctx-dev-landing';

const routes: Routes = [
  {path:"",component:CCTXDevFAQComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevFAQRoutingModule { }
export const COMPONENTS = [
  CCTXDevFAQComponent,
];