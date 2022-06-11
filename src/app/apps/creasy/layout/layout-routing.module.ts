import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_HeaderComponent } from './header';
import { Creasy_FooterComponent } from './footer';
import { Creasy_FooterTwoComponent } from './footer-alt';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_LayoutRoutingModule { }

export const COMPONENTS = [
  Creasy_HeaderComponent,
  Creasy_FooterComponent,
  Creasy_FooterTwoComponent,
];