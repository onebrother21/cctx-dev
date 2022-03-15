import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { ContactUsMsg } from "../models";

export const ContactUsActions = {
  fetch:createAction("@qs/contact-us/fetch"),
  load:createAction("@qs/contact-us/load",(msgs:ContactUsMsg[]) => ({msgs})),
  send:createAction("@qs/contact-us/send",(msg:ContactUsMsg) => ({msg})),
  loadOne:createAction("@qs/contact-us/load-one",(msg:ContactUsMsg) => ({msg})),
  error:createAction("@qs/contact-us/error",(error:AppError) => ({error})),
};