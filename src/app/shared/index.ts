import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedRoutingModule } from './routing';
import { COMPONENTS } from "./components";
import { PIPES } from './pipes';

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES,
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...PIPES,
  ],
})
export class SharedModule { }

export * from "./types";