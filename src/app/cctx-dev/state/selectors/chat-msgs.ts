import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./cctx-dev";

export const chatMsgs$ = createSelector(cctxdev$,s => s.msgs);
export const chatMsg$ = createSelector(chatMsgs$,s => s.latest);