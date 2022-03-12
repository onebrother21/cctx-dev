import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { User } from "../models";

export const AppUserActions = {
  populate:createAction("@cctx-dev/app-user/populate"),
  load:createAction("@cctx-dev/app-user/load",(user:User) => ({user})),
  error:createAction("@cctx-dev/app-user/error",(error:AppError) => ({error})),
};