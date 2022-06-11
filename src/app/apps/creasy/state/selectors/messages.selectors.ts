import {createFeatureSelector, createSelector} from "@ngrx/store";
import { MessagesState } from "../states";

export const messages$$ = createFeatureSelector<MessagesState>("msgs");
export const messages$ = createSelector(messages$$,s => s.latest);
export const messagesLoading$ = createSelector(messages$,s => s.loading);
export const messagesErr$ = createSelector(messages$,s => s.error);