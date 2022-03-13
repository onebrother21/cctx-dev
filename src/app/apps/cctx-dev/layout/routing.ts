import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevHeaderComponent } from './cctx-dev-header';
import { CCTXDevFooterComponent } from './cctx-dev-footer';
import { CCTXDevFooterTwoComponent } from './cctx-dev-footer-two';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevLayoutRoutingModule { }

export const COMPONENTS = [
  CCTXDevHeaderComponent,
  CCTXDevFooterComponent,
  CCTXDevFooterTwoComponent,
];