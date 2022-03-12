import { Action, createReducer, on } from "@ngrx/store";
import { ContactUsActions as ContactUs } from "../actions";
import { ContactUsState,initializeContactUs } from "../states";

const initialState = initializeContactUs();
const reducer = createReducer(
  initialState,
  on(ContactUs.fetch,s => ({...s,loading:true})),
  on(ContactUs.load,(s,{msgs}) => ({...s,items:msgs,loading:false})),
  on(ContactUs.loadOne,(s,{msg}) => ({ ...s,latest:msg})),
  on(ContactUs.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function ContactUsReducer(s:ContactUsState|undefined,action:Action) {return reducer(s,action);}