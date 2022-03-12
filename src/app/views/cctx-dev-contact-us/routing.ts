import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevContactUsComponent } from './cctx-dev-contact-us';

const routes: Routes = [
  {path:"",component:CCTXDevContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevContactUsRoutingModule { }
export const COMPONENTS = [
  CCTXDevContactUsComponent,
];