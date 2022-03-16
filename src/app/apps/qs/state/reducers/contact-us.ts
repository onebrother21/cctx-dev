import { Action, createReducer, on } from "@ngrx/store";
import { ContactUsActions as CONTACTUS } from "../actions";
import { ContactUsState,initializeContactUs } from "../states";

const initialState = initializeContactUs();
const reducer = createReducer(
  initialState,
  on(CONTACTUS.fetch,s => ({...s,loading:true})),
  on(CONTACTUS.load,(s,{msgs}) => ({...s,items:msgs,loading:false})),
  on(CONTACTUS.loadOne,(s,{msg}) => ({ ...s,selected:{i:0,item:msg,id:msg.id}})),
  on(CONTACTUS.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function ContactUsReducer(s:ContactUsState|undefined,action:Action) {return reducer(s,action);}