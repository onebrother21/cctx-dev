import { Action, createReducer, on } from "@ngrx/store";
import { QS_UsersActions as SESSIONS } from "../actions";
import { QS_User } from '../models';
import { QS_UsersState,initializeUsers } from "../states";

const initialState = initializeUsers();
const reducer = createReducer(
  initialState,
  on(SESSIONS.fetch,s => ({...s,loading:true})),
  on(SESSIONS.load,(s,{payload:users}) => ({...s,items:users,loading:false})),
  on(SESSIONS.loadMore,(s,{payload:users}) => ({...s,items:[...(s.items||[]),...users],loading:false})),
  on(SESSIONS.select,(s,{payload:user}) => ({ ...s,selected:{item:user,id:user.id,i:getIndex(s.items as QS_User[],user)}})),
  on(SESSIONS.deselect,(s) => ({ ...s,selected:null})),
  on(SESSIONS.error,(s,{payload:error}) => ({ ...s,error:error.json(),loading:false})),
);

export function QS_UsersReducer(s:QS_UsersState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends QS_User>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;