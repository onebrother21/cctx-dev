import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./cctx-dev";

export const contactUs$ = createSelector(cctxdev$,s => s.contactUs);
export const contactUsMsg$ = createSelector(contactUs$,s => s.latest);