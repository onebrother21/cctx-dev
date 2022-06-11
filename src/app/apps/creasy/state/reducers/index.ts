import { ActionReducerMap } from "@ngrx/store";
import { Creasy_State } from "../states";
import { LayoutsReducer } from "./layouts.reducer";
import { NavigationReducer } from "./navigation.reducer";
import { ContactUsReducer } from "./contact-us.reducer";
import { TasksReducer } from "./tasks.reducer";
import { MessagesReducer } from './messages.reducer';
import { MeReducer } from './me.reducer';
import { AuthenticationReducer } from './auth.reducer';
import { SessionsReducer } from './sessions.reducer';
import { RoomsReducer } from './rooms.reducer';
import { UsersReducer } from './users.reducer';
import { BusinessesReducer } from "./businesses.reducer";
import { PaymentsReducer } from "./payments.reducer";


export const REDUCERS = {
  layouts:LayoutsReducer,
  navigation:NavigationReducer,
  auth:AuthenticationReducer,
  me:MeReducer,
  //uploads:UploadsReducers,
  users:UsersReducer,
  sessions:SessionsReducer,
  rooms:RoomsReducer,
  msgs:MessagesReducer,
  contactUs:ContactUsReducer,
  tasks:TasksReducer,
  businesses:BusinessesReducer,
  payments:PaymentsReducer,
} as ActionReducerMap<Creasy_State>;