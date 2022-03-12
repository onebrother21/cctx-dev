import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { Task } from "../models";

export const TasksActions = {
  fetch:createAction("@cctx-dev/tasks/fetch"),
  load:createAction("@cctx-dev/tasks/load",(tasks:Task[]) => ({tasks})),
  loadMore:createAction("@cctx-dev/tasks/load-more",(tasks:Task[]) => ({tasks})),
  select:createAction("@cctx-dev/tasks/select",(task:Task) => ({task})),
  deselect:createAction("@cctx-dev/tasks/deselect"),
  create:createAction("@cctx-dev/tasks/create",(task:Task) => ({task})),
  error:createAction("@cctx-dev/tasks/error",(error:AppError) => ({error})),
};