import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevLargeCardListComponent } from './cctx-dev-large-card-list';

const routes: Routes = [
  {path:"",component:CCTXDevLargeCardListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevLargeCardListRoutingModule { }
export const COMPONENTS = [
  CCTXDevLargeCardListComponent,
];