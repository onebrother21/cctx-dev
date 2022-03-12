import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { ChatMsg } from "../models";

export const ChatMessagesActions = {
  fetch:createAction("@cctx-dev/chat-msgs/fetch"),
  load:createAction("@cctx-dev/chat-msgs/load",(msgs:ChatMsg[]) => ({msgs})),
  send:createAction("@cctx-dev/chat-msgs/send",(msg:ChatMsg) => ({msg})),
  loadOne:createAction("@cctx-dev/chat-msgs/load-one",(msg:ChatMsg) => ({msg})),
  error:createAction("@cctx-dev/chat-msgs/error",(error:AppError) => ({error})),
};