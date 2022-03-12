import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./cctx-dev";

export const userState$ = createSelector(cctxdev$,s => s.user);
export const appuser$ = createSelector(userState$,s => s.me);