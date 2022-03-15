import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { Task } from "../models";

export const TasksActions = {
  fetch:createAction("@qs/tasks/fetch"),
  load:createAction("@qs/tasks/load",(tasks:Task[]) => ({tasks})),
  loadMore:createAction("@qs/tasks/load-more",(tasks:Task[]) => ({tasks})),
  select:createAction("@qs/tasks/select",(task:Task) => ({task})),
  deselect:createAction("@qs/tasks/deselect"),
  create:createAction("@qs/tasks/create",(task:Task) => ({task})),
  error:createAction("@qs/tasks/error",(error:AppError) => ({error})),
};