import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const auth$ = createSelector(qs$,s => s.auth);
export const authLoading$ = createSelector(auth$,s => s.loading);
export const authErr$ = createSelector(auth$,s => s.error);