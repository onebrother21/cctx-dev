import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const chatMsgs$ = createSelector(qs$,s => s.msgs);
export const chatMsg$ = createSelector(chatMsgs$,s => s.latest);