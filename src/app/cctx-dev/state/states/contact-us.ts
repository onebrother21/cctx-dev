import { CommonState,initializeCommonState,Entity } from "@state";
import { ContactUsMsg } from "../models";

export interface ContactUsState extends CommonState<ContactUsMsg & Entity> {latest:ContactUsMsg|null;}
export const initializeContactUs = ():ContactUsState => ({
  ...initializeCommonState(false,true),
  latest:null,
});