import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_UserDashComponent } from './me-dash';
import { Creasy_UserAccountComponent } from './me-account';
import { Creasy_UserHomeComponent } from './me-home';
//import { Creasy_UserHomePreviewComponent } from './qs-user-home-preview';
//import { Creasy_UserHomePreviewsComponent } from '../qs-rooms/qs-room-previews';
import { Creasy_UserMessagesComponent } from './me-msgs';
import { Creasy_UserAccountEditorComponent } from './me-editor';
import { Creasy_UserHomeIconTrayOneComponent } from './me-notifications';
import { Creasy_UserHomeIconTrayTwoComponent } from './me-home-notifications';
import { Creasy_UserHomeAltComponent } from './me-home-alt';

const routes: Routes = [
  {path:"",redirectTo:"hm",pathMatch:"full"},
  {path:"hm",component:Creasy_UserHomeComponent},
  {path:"hm2",component:Creasy_UserHomeAltComponent},
  {path:"dash",component:Creasy_UserDashComponent},
  {path:"acct",component:Creasy_UserAccountComponent},
  {path:"edit",component:Creasy_UserAccountEditorComponent},
  {path:"upgrade",component:Creasy_UserAccountComponent},
  {path:"msgs",component:Creasy_UserMessagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_UserRoutingModule { }
export const COMPONENTS = [
  Creasy_UserDashComponent,
  Creasy_UserAccountComponent,
  Creasy_UserHomeComponent,
  Creasy_UserHomeAltComponent,
  //Creasy_UserHomePreviewComponent,
  //Creasy_UserHomePreviewsComponent,
  Creasy_UserMessagesComponent,
  Creasy_UserAccountEditorComponent,
  Creasy_UserHomeIconTrayOneComponent,
  Creasy_UserHomeIconTrayTwoComponent,
];