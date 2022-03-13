import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevAuthComponent } from './cctx-dev-auth';
import { CCTXDevAuthForgotComponent } from './cctx-dev-auth-forgot';//use this for both forgots
import { CCTXDevAuthLoginComponent } from './cctx-dev-auth-login';
import { CCTXDevAuthRegisterComponent } from './cctx-dev-auth-register';//use this for all register
import { CCTXDevAuthSignInComponent } from './cctx-dev-auth-signin';
import { CCTXDevAuthSignOutComponent } from './cctx-dev-auth-signout';
import { CCTXDevAuthSignUpComponent } from './cctx-dev-auth-signup';
import { CCTXDevAuthUpdatePinComponent } from './cctx-dev-auth-update-pin';//confirm pin
import { CCTXDevAuthVerifyComponent } from './cctx-dev-auth-verify';

const routes: Routes = [
  {path:"",component:CCTXDevAuthComponent,children:[
    {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signin",component:CCTXDevAuthSignInComponent},
    {path:"signup",component:CCTXDevAuthSignUpComponent},
    {path:"verify",component:CCTXDevAuthVerifyComponent},
    {path:"register",component:CCTXDevAuthRegisterComponent},
    {path:"register2",component:CCTXDevAuthRegisterComponent},
    {path:"update-pin",component:CCTXDevAuthUpdatePinComponent},
    {path:"confirm-pin",component:CCTXDevAuthUpdatePinComponent},
    {path:"login",component:CCTXDevAuthLoginComponent},
    {path:"forgot-username",component:CCTXDevAuthForgotComponent},
    {path:"forgot-pin",component:CCTXDevAuthForgotComponent},
    {path:"signout",component:CCTXDevAuthSignOutComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevAuthRoutingModule { }
export const COMPONENTS = [
  CCTXDevAuthComponent,
  CCTXDevAuthForgotComponent,
  CCTXDevAuthLoginComponent,
  CCTXDevAuthRegisterComponent,
  CCTXDevAuthSignInComponent,
  CCTXDevAuthSignOutComponent,
  CCTXDevAuthSignUpComponent,
  CCTXDevAuthUpdatePinComponent,
  CCTXDevAuthVerifyComponent,
];