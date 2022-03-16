import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { AppUser } from "../models";

export const AppUserActions = {
  populate:createAction("@qs/app-user/populate"),
  load:createAction("@qs/app-user/load",(user:AppUser) => ({user})),
  error:createAction("@qs/app-user/error",(error:AppError) => ({error})),
};