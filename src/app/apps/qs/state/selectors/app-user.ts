import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const user$ = createSelector(qs$,s => s.user);
export const me$ = createSelector(user$,s => s.me);
export const userLoading$ = createSelector(user$,s => s.loading);
export const userErr$ = createSelector(user$,s => s.error);