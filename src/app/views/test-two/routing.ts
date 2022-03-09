import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestTwoComponent } from './test-two';

const routes: Routes = [
  {path:"",component:TestTwoComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestTwoRoutingModule { }
export const COMPONENTS = [
  TestTwoComponent,
];