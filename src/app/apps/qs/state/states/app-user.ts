import { CommonState,initializeCommonState,Entity } from "@state";
import { AppUser } from "../models";

export interface AppUserState extends CommonState<AppUser & Entity> {me?:AppUser;}
export const initializeAppUser = ():AppUserState => ({
  ...initializeCommonState(false,true),
});