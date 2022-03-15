import { Action, createReducer, on } from "@ngrx/store";
import { ChatMessagesActions as ChatMessages } from "../actions";
import { ChatMessagesState,initializeChatMessages } from "../states";

const initialState = initializeChatMessages();
const reducer = createReducer(
  initialState,
  on(ChatMessages.fetch,s => ({...s,loading:true})),
  on(ChatMessages.load,(s,{msgs}) => ({...s,items:msgs,loading:false})),
  on(ChatMessages.loadOne,(s,{msg}) => ({ ...s,latest:msg})),
  on(ChatMessages.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function ChatMessagesReducer(s:ChatMessagesState|undefined,action:Action) {return reducer(s,action);}