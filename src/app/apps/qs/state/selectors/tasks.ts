import {createSelector} from "@ngrx/store";
import {qs$} from "./app";

export const tasksState$ = createSelector(qs$,s => s.tasks);
export const tasks$ = createSelector(tasksState$,s => s.items);
export const selectedTask$ = createSelector(tasksState$,s => s.selected);