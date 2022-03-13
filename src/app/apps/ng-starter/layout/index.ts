import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { COMPONENTS } from "./components";

@NgModule({
  declarations: [...COMPONENTS],
  imports: [SharedModule],
  exports:[...COMPONENTS],
})
export class NgStarterLayoutModule { }
