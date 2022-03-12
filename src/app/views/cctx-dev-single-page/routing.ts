import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevSinglePageComponent } from './cctx-dev-single-page';

const routes: Routes = [
  {path:"",component:CCTXDevSinglePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevSinglePageRoutingModule { }
export const COMPONENTS = [
  CCTXDevSinglePageComponent,
];