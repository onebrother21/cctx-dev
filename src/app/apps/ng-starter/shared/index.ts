import { NgModule } from "@angular/core";
import { SharedModule } from "@shared";
import { COMPONENTS } from "./components";
import { DIRECTIVES } from "./directives";
import { CCTXDevSharedRoutingModule } from "./routing";


@NgModule({
  declarations: [
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
  imports: [
    SharedModule,
    CCTXDevSharedRoutingModule,
  ],
  exports: [
    SharedModule,
    ...COMPONENTS,
    ...DIRECTIVES,
  ],
})
export class CCTXDevSharedModule { }
export * from "./types";