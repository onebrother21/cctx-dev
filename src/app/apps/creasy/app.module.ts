import { NgModule } from '@angular/core';
import { SharedModule } from "@shared";
import { Creasy_SharedModule } from "./shared";
import { Creasy_StateModule } from "./state";
import { Creasy_LayoutModule } from "./layout";
import { Creasy_RoutingModule } from './app-routing.module';
import { Creasy_Component } from './app.component';


@NgModule({
  declarations: [Creasy_Component],
  imports: [
    SharedModule,
    Creasy_SharedModule,
    Creasy_StateModule,
    Creasy_LayoutModule,
    Creasy_RoutingModule,
  ]
})

export class Creasy_Module { }