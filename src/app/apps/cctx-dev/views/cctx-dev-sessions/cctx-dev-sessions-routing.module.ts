import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevSessionComponent } from './cctx-dev-session';
import { CCTXDevSessionListComponent } from './cctx-dev-session-list';
import { CCTXDevSessionsComponent } from './cctx-dev-sessions';

const routes: Routes = [
  {path:"",component:CCTXDevSessionsComponent,children:[
    {path:"",redirectTo:"recent",pathMatch:"full"},
    {path:"recent",component:CCTXDevSessionListComponent},
    {path:"new",component:CCTXDevSessionComponent},
    {path:":id",component:CCTXDevSessionComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevSessionsRoutingModule { }
export const COMPONENTS = [
  CCTXDevSessionsComponent,
  CCTXDevSessionComponent,
  CCTXDevSessionListComponent,
];