import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { ChatMsg } from "../models";

export const ChatMessagesActions = {
  fetch:createAction("@qs/chat-msgs/fetch"),
  load:createAction("@qs/chat-msgs/load",(msgs:ChatMsg[]) => ({msgs})),
  send:createAction("@qs/chat-msgs/send",(msg:ChatMsg) => ({msg})),
  loadOne:createAction("@qs/chat-msgs/load-one",(msg:ChatMsg) => ({msg})),
  error:createAction("@qs/chat-msgs/error",(error:AppError) => ({error})),
};