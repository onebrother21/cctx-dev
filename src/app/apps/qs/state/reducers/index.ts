import { ActionReducerMap } from '@ngrx/store';
import { QS_State } from '../states';
import { LayoutReducer } from "./layout";
import { NavigationReducer } from "./navigation";
import { ContactUsReducer } from "./contact-us";
import { TasksReducer } from "./tasks";
import { ChatMessagesReducer } from './chat-msgs';
import { AppUserReducer } from './app-user';
import { AuthenticationReducer } from './auth';

export const REDUCERS = {
  layout:LayoutReducer,
  navigation:NavigationReducer,
  contactUs:ContactUsReducer,
  tasks:TasksReducer,
  msgs:ChatMessagesReducer,
  user:AppUserReducer,
  auth:AuthenticationReducer,
} as ActionReducerMap<QS_State>;
