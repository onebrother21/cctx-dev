import { createAction } from "@ngrx/store";
import { AppError } from  "@state";
import { AppLayout } from "../models";

export const LayoutActions = {
  fetch:createAction("@cctx-dev/layout/fetch"),
  load:createAction("@cctx-dev/layout/load",(layout:AppLayout) => ({layout})),
  toggleMobileNav:createAction("@cctx-dev/layout/mobile-nav/toggle",(open?:boolean) => ({open})),
  error:createAction("@cctx-dev/layout/error",(error:AppError) => ({error})),
};