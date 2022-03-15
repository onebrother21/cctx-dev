import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { User } from "../models";

export const AppUserActions = {
  populate:createAction("@qs/app-user/populate"),
  load:createAction("@qs/app-user/load",(user:User) => ({user})),
  error:createAction("@qs/app-user/error",(error:AppError) => ({error})),
};