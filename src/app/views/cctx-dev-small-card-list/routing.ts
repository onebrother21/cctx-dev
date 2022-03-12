import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevSmallCardListComponent } from './cctx-dev-small-card-list';

const routes: Routes = [
  {path:"",component:CCTXDevSmallCardListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevSmallCardListRoutingModule { }
export const COMPONENTS = [
  CCTXDevSmallCardListComponent,
];