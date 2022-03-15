import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./app";

export const layout$ = createSelector(cctxdev$,s => s.layout);
export const header$ = createSelector(layout$,s => s.header);
export const mobileNav$ = createSelector(layout$,s => s.mobileNav);
export const footer$ = createSelector(layout$,s => s.footer);
export const pagination$ = createSelector(layout$,s => s.pagination);

export const headerMenu$ = createSelector(header$,s => s.menu);
export const mobileNavMenu$ = createSelector(mobileNav$,s => s.menu);
export const mobileNavOpen$ = createSelector(mobileNav$,s => s.open);
export const footerOpen$ = createSelector(mobileNav$,s => s.open);
export const copyright$ = createSelector(footer$,s => s.copy);
