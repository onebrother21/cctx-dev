import { CommonState,initializeCommonState,Entity } from "@state";
import { ChatMsg } from "../models";

export interface ChatMessagesState extends CommonState<ChatMsg & Entity> {latest:ChatMsg|null;}
export const initializeChatMessages = ():ChatMessagesState => ({
  ...initializeCommonState(false,true),
  latest:null,
});