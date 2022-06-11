import { CommonStateWithEntities,initializeCommonStateWithEntities } from "@state";
import { Message } from "../models";

export interface MessagesState extends CommonStateWithEntities<Message> {
  mine:{recipients:string[];Message[];}[];
export const initializeMessages = ():MessagesState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});