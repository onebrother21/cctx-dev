import { CommonState,initializeCommonState,Entity } from "@state";
import { User } from "../models";

export interface AppUserState extends CommonState<User & Entity> {me:User|null;}
export const initializeAppUser = ():AppUserState => ({
  ...initializeCommonState(false,true),
  me:null,
});