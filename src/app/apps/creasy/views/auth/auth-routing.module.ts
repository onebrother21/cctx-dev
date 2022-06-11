import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Creasy_AuthComponent } from './auth';
import { Creasy_AuthSignInComponent } from './auth-signin';
import { Creasy_AuthSignUpComponent } from './auth-signup';
import { Creasy_AuthSignOutComponent } from './auth-signout';
import { Creasy_AuthVerifyComponent } from './auth-verify';
import { Creasy_AuthRegisterComponent } from './auth-register';//use this for all register
import { Creasy_AuthUpdatePinComponent } from './auth-update-pin';//confirm pin
import { Creasy_AuthLoginComponent } from './auth-login';
import { Creasy_AuthForgotComponent } from './auth-forgot';//use this for both forgots

const routes: Routes = [
  {path:"",component:Creasy_AuthComponent,children:[
    {path:"",redirectTo:"signup",pathMatch:"full"},
    {path:"signin",component:Creasy_AuthSignInComponent},
    {path:"signup",component:Creasy_AuthSignUpComponent},
    {path:"verify",component:Creasy_AuthVerifyComponent},
    {path:"register",component:Creasy_AuthRegisterComponent},
    {path:"update-pin",component:Creasy_AuthUpdatePinComponent},
    {path:"confirm-pin",component:Creasy_AuthUpdatePinComponent},
    {path:"login",component:Creasy_AuthLoginComponent},
    {path:"forgot-username",component:Creasy_AuthForgotComponent},
    {path:"forgot-pin",component:Creasy_AuthForgotComponent},
    {path:"signout",component:Creasy_AuthSignOutComponent},
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Creasy_AuthRoutingModule { }
export const COMPONENTS = [
  Creasy_AuthComponent,
  Creasy_AuthForgotComponent,
  Creasy_AuthLoginComponent,
  Creasy_AuthRegisterComponent,
  Creasy_AuthSignInComponent,
  Creasy_AuthSignOutComponent,
  Creasy_AuthSignUpComponent,
  Creasy_AuthUpdatePinComponent,
  Creasy_AuthVerifyComponent,
];