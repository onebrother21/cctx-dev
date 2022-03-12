import { ActionReducerMap } from '@ngrx/store';
import { CCTXDevState } from '../states';
import { LayoutReducer } from "./layout";
import { NavigationReducer } from "./navigation";
import { ContactUsReducer } from "./contact-us";
import { TasksReducer } from "./tasks";
import { ChatMessagesReducer } from './chat-msgs';
import { AppUserReducer } from './app-user';

export const REDUCERS = {
  layout:LayoutReducer,
  navigation:NavigationReducer,
  contactUs:ContactUsReducer,
  tasks:TasksReducer,
  msgs:ChatMessagesReducer,
  user:AppUserReducer,
  
} as ActionReducerMap<CCTXDevState>;
