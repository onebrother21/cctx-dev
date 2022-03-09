import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './routing';
import { COMPONENTS } from "./components";



@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports:[
    CommonModule,
    ...COMPONENTS
  ],
})
export class SharedModule { }
