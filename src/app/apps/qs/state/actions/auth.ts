import { createAction } from "@ngrx/store";
import { AppError } from '@state';
import { AppUser } from "../models";

export const AuthenticationActions = {
  signup:createAction("@qs/auth/signup",(o:{email:string;action:string}) => o),
  signin:createAction("@qs/auth/signin",(o:{username:string;action:string}) => o),
  verify:createAction("@qs/auth/verify",(o:{code:string;action:string}) => o),
  register:createAction("@qs/auth/register",(o:AppUser) => o),
  login:createAction("@qs/auth/login",(o:{pin:string;action:string}) => o),
  forgot:createAction("@qs/auth/forgot",(o:{email:string;action:string}) => o),
  updatePin:createAction("@qs/auth/updatePin",(o:{pin:string;action:string}) => o),
  load:createAction("@qs/auth/load",(o:Partial<AppUser>) => o),
  error:createAction("@qs/auth/error",(error:AppError) => ({error})),
};