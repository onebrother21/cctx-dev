import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevPicAndPostComponent } from './cctx-dev-pic-and-post';

const routes: Routes = [
  {path:"",component:CCTXDevPicAndPostComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevPicAndPostRoutingModule { }
export const COMPONENTS = [
  CCTXDevPicAndPostComponent,
];