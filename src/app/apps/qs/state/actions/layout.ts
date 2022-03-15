import { createAction } from "@ngrx/store";
import { AppError } from  "@state";
import { AppLayout } from "../models";

export const LayoutActions = {
  scrollTop:createAction("@qs/layout/scroll-to-top"),
  fetch:createAction("@qs/layout/fetch"),
  load:createAction("@qs/layout/load",(layout:AppLayout) => ({layout})),
  toggleMobileNav:createAction("@qs/layout/mobile-nav/toggle",(open?:boolean) => ({open})),
  error:createAction("@qs/layout/error",(error:AppError) => ({error})),
};