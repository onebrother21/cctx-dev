import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_HomeComponent } from './home';

const routes: Routes = [
  {path:"",component:Creasy_HomeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_HomeRoutingModule { }
export const COMPONENTS = [
  Creasy_HomeComponent,
];