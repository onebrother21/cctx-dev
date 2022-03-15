import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./app";

export const tasksState$ = createSelector(cctxdev$,s => s.tasks);
export const tasks$ = createSelector(tasksState$,s => s.items);
export const selectedTask$ = createSelector(tasksState$,s => s.selected);