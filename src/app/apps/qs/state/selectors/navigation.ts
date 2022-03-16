import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const navigation$ = createSelector(qs$,s => s.navigation);
export const navigationLoading$ = createSelector(navigation$,s => s.loading);
export const navigationErr$ = createSelector(navigation$,s => s.error);
export const pageTitle$ = createSelector(navigation$,s => s.page);
export const history$ = createSelector(navigation$,s => s.history);
export const requestedUrl$ = createSelector(navigation$,s => s.requested);