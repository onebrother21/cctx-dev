import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { ContactUsMsg } from "../models";

export const ContactUsActions = {
  fetch:createAction("@cctx-dev/contact-us/fetch"),
  load:createAction("@cctx-dev/contact-us/load",(msgs:ContactUsMsg[]) => ({msgs})),
  send:createAction("@cctx-dev/contact-us/send",(msg:ContactUsMsg) => ({msg})),
  loadOne:createAction("@cctx-dev/contact-us/load-one",(msg:ContactUsMsg) => ({msg})),
  error:createAction("@cctx-dev/contact-us/error",(error:AppError) => ({error})),
};