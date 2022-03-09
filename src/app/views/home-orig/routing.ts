import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeOrigComponent } from './home-orig';

const routes: Routes = [
  {path:"",component:HomeOrigComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeOrigRoutingModule { }
export const COMPONENTS = [
  HomeOrigComponent,
];