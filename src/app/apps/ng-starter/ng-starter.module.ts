import { NgModule } from '@angular/core';
import { SharedModule } from "@shared";
import { NgStarterStateModule } from "./state";
import { NgStarterLayoutModule } from "./layout";
import { NgStarterRoutingModule } from './ng-starter-routing.module';
import { NgStarterComponent } from './ng-starter.component';

@NgModule({
  declarations: [NgStarterComponent],
  imports: [
    SharedModule,
    NgStarterStateModule,
    NgStarterLayoutModule,
    NgStarterRoutingModule,
  ]
})

export class NgStarterModule { }