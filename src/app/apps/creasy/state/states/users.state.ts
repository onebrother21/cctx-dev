import { CommonStateWithEntities,initializeCommonStateWithEntities } from "@state";
import { UserJson } from "../models";

export interface UsersState extends CommonStateWithEntities<UserJson> {latest:UserJson[];}
export const initializeUsers = ():UsersState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});