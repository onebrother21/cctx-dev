import { CommonStateWithEntities,initializeCommonStateWithEntities } from "@state";
import { ContactUsMsg } from "../models";

export interface ContactUsState extends CommonStateWithEntities<ContactUsMsg> {latest:ContactUsMsg[];}
export const initializeContactUs = ():ContactUsState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});