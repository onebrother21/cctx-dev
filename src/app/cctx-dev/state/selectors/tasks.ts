import {createSelector} from "@ngrx/store";
import {cctxdev$} from "./cctx-dev";

export const tasksState$ = createSelector(cctxdev$,s => s.tasks);
export const tasks$ = createSelector(tasksState$,s => s.items);
export const selectedTask$ = createSelector(tasksState$,s => s.selected);