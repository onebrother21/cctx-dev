import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CCTXDevServicesDashComponent } from './cctx-dev-services-dash';
import { CCTXDevFAQComponent } from './cctx-dev-faq';
import { CCTXDevContactUsComponent } from './cctx-dev-contact-us';

const routes: Routes = [
  {path:"",redirectTo:"dash",pathMatch:"full"},
  {path:"dash",component:CCTXDevServicesDashComponent},
  {path:"faq",component:CCTXDevFAQComponent},
  {path:"contact",component:CCTXDevContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CCTXDevServicesRoutingModule { }
export const COMPONENTS = [
  CCTXDevServicesDashComponent,
];