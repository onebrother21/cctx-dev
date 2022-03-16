import { Action, createReducer, on } from "@ngrx/store";
import { AppUserActions as APPUSER } from "../actions";
import { AppUserState,initializeAppUser } from "../states";

const initialState = initializeAppUser();
const reducer = createReducer(
  initialState,
  on(APPUSER.populate,s => ({...s,loading:true})),
  on(APPUSER.load,(s,{user}) => ({...s,me:user,loading:false})),
  on(APPUSER.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function AppUserReducer(s:AppUserState|undefined,action:Action) {return reducer(s,action);}