import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QS_UserDashComponent } from './qs-user-dash';
import { QS_UserAccountComponent } from './qs-user-account';
import { QS_UserHomeComponent } from './qs-user-home';
import { QS_UserHomePreviewComponent } from './qs-user-home-preview';
import { QS_UserHomePreviewsComponent } from './qs-user-home-previews';
import { QS_UserMessagesComponent } from './qs-user-msgs';

const routes: Routes = [
  {path:"",redirectTo:"hm",pathMatch:"full"},
  {path:"hm",component:QS_UserHomeComponent},
  {path:"dash",component:QS_UserDashComponent},
  {path:"acct",component:QS_UserAccountComponent},
  {path:"msgs",component:QS_UserMessagesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QS_UserRoutingModule { }
export const COMPONENTS = [
  QS_UserDashComponent,
  QS_UserAccountComponent,
  QS_UserHomeComponent,
  QS_UserHomePreviewComponent,
  QS_UserHomePreviewsComponent,
  QS_UserMessagesComponent,
];