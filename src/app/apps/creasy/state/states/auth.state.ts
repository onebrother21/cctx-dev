import { User, UserJson } from "../models";
import { CommonState,initializeCommonState } from "@state";

export interface AuthenticationState extends CommonState,Partial<Pick<UserJson,"token"|"username">> {
  exists?:Record<string,boolean>;
}
export const initializeAuth = ():AuthenticationState => initializeCommonState();