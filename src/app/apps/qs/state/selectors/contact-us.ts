import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const contactUs$ = createSelector(qs$,s => s.contactUs);
export const contactUsMsg$ = createSelector(contactUs$,s => s.latest);