import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevNotFoundComponent } from './cctx-dev-not-found';

const routes: Routes = [
  {path:"",component:CCTXDevNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevNotFoundRoutingModule { }
export const COMPONENTS = [
  CCTXDevNotFoundComponent,
];