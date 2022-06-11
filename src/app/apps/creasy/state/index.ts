import { NgModule } from '@angular/core';
import { SharedModule } from "@shared";

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { REDUCERS } from "./reducers";
import { EFFECTS } from "./effects";

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature("creasy",REDUCERS),
    EffectsModule.forFeature(EFFECTS),
  ],
})

export class Creasy_StateModule { }
export * from "./actions";
export * from "./models";
export * from "./states";
export * from "./services";
export * from "./selectors";