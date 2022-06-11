import { createAction } from "@ngrx/store";
import { AppError } from "@state";
import { Message } from "../models";

export const MessagesActions = {
  fetch:createAction("@qs/msgs/fetch"),
  fetchRecent:createAction('@qs/msgs/fetch/recent'),
  load:createAction("@qs/msgs/load",(o:Message[]) => ({payload:o})),
  loadOne:createAction("@qs/msgs/load-one",(o:Message) => ({payload:o})),
  unloadOne:createAction('@qs/msgs/unload',(o:string) => ({payload:o})),
  select:createAction('@qs/msgs/select',(o:string) => ({payload:o})),
  deselect:createAction("@qs/msgs/deselect"),
  send:createAction("@qs/msgs/send",(o:Message) => ({payload:o})),
  error:createAction("@qs/msgs/error",(o:Error|AppError) => ({payload:o})),
};