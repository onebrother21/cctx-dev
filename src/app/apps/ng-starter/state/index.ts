import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from "@shared";

@NgModule({
  imports: [
    SharedModule,
    //StoreModule.forFeature("ng-starter",REDUCERS),
    //EffectsModule.forFeature(EFFECTS),
  ],
})

export class NgStarterStateModule { }