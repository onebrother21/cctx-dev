import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_ErrorComponent } from './error';

const routes: Routes = [
  {path:"",component:Creasy_ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_ErrorRoutingModule { }
export const COMPONENTS = [
  Creasy_ErrorComponent,
];