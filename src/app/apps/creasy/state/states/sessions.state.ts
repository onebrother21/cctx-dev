import { CommonStateWithEntities,initializeCommonStateWithEntities } from "@state";
import { Session } from "../models";

export interface SessionsState extends CommonStateWithEntities<Session> {latest:Session[];}
export const initializeSessions = ():SessionsState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});