import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const userState$ = createSelector(qs$,s => s.user);
export const appuser$ = createSelector(userState$,s => s.me);