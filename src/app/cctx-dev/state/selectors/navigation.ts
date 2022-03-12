import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./cctx-dev";

export const navigation$ = createSelector(cctxdev$,s => s.navigation);
export const navigationErr$ = createSelector(navigation$,s => s.error);
export const pageTitle$ = createSelector(navigation$,s => s.page);
export const history$ = createSelector(navigation$,s => s.history);
export const requestedUrl$ = createSelector(navigation$,s => s.requested);