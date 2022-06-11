import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_SessionComponent } from './messages';
import { Creasy_SessionEditorComponent } from './message-editor';
import { Creasy_SessionListComponent } from './message-list';
import { Creasy_SessionRoomComponent } from './session-room';

const routes: Routes = [
  {path:"",redirectTo:"recent",pathMatch:"full"},
  {path:"recent",component:Creasy_SessionListComponent},
  {path:"new",component:Creasy_SessionEditorComponent},
  {path:"room/:id",component:Creasy_SessionRoomComponent},
  {path:":id",component:Creasy_SessionComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_SessionsRoutingModule { }
export const COMPONENTS = [
  Creasy_SessionComponent,
  Creasy_SessionRoomComponent,
  Creasy_SessionListComponent,
  Creasy_SessionEditorComponent,
];