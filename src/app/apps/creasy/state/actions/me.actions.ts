import { createAction } from "@ngrx/store";
import { AppError } from "@state";
import { User,UserJson } from "../models";

export const MeActions = {
  //active:createAction("@qs/me/active"),
  populate:createAction("@qs/me/populate"),
  load:createAction("@qs/me/load",(o:Partial<UserJson>) => ({payload:o})),
  unload:createAction('@qs/me/unload'),
  update:createAction('@qs/me/update',(o:Partial<User>) => ({payload:o})),
  error:createAction("@qs/me/error",(o:Error|AppError) => ({payload:o})),
};