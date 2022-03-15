import { Action, createReducer, on } from "@ngrx/store";
import { AppUserActions as AppUser } from "../actions";
import { AppUserState,initializeAppUser } from "../states";

const initialState = initializeAppUser();
const reducer = createReducer(
  initialState,
  on(AppUser.populate,s => ({...s,loading:true})),
  on(AppUser.load,(s,{user}) => ({...s,me:user,loading:false})),
  on(AppUser.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function AppUserReducer(s:AppUserState|undefined,action:Action) {return reducer(s,action);}