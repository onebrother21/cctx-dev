import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./app";

export const userState$ = createSelector(cctxdev$,s => s.user);
export const appuser$ = createSelector(userState$,s => s.me);