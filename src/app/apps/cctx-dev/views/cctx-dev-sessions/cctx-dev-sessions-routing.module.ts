import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevSessionComponent } from './cctx-dev-session';
import { CCTXDevSessionEditorComponent } from './cctx-dev-session-editor';
import { CCTXDevSessionListComponent } from './cctx-dev-session-list';
import { CCTXDevSessionRoomComponent } from './cctx-dev-session-room';

const routes: Routes = [
  {path:"",redirectTo:"recent",pathMatch:"full"},
  {path:"recent",component:CCTXDevSessionListComponent},
  {path:"new",component:CCTXDevSessionEditorComponent},
  {path:"room/:id",component:CCTXDevSessionRoomComponent},
  {path:":id",component:CCTXDevSessionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevSessionsRoutingModule { }
export const COMPONENTS = [
  CCTXDevSessionComponent,
  CCTXDevSessionRoomComponent,
  CCTXDevSessionListComponent,
  CCTXDevSessionEditorComponent,
];