import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgStarterComponent } from './ng-starter.component';

const routes: Routes = [
  {path:"",component:NgStarterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgStarterRoutingModule { }