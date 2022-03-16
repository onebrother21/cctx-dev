import { CommonState,initializeCommonState,Entity } from "@state";

export interface AuthenticationState extends CommonState<Entity> {}
export const initializeAuth = ():AuthenticationState => ({
  ...initializeCommonState(false,true),
});