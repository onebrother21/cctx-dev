import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestOneComponent } from './test-one';

const routes: Routes = [
  {path:"",component:TestOneComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TestOneRoutingModule { }
export const COMPONENTS = [
  TestOneComponent,
];