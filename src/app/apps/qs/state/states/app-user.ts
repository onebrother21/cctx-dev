import { CommonState,initializeCommonState } from "@state";
import { AppUser } from "../models";

export interface AppUserState extends CommonState {me?:AppUser;}
export const initializeAppUser = ():AppUserState => ({
  ...initializeCommonState(false,false),
});