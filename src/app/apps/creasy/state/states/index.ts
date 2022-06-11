import { LayoutsState } from './layouts.state';
import { NavigationState } from './navigation.state';
import { AuthenticationState } from './auth.state';
import { MeState } from './me.state';
import { UsersState } from './users.state';
import { SessionsState } from './sessions.state';
import { RoomsState } from './rooms.state';
import { MessagesState } from './messages.state';
import { ContactUsState } from './contact-us.state';
import { TasksState } from "./tasks.state";
import { BusinessesState } from './businesses.state';
import { PaymentsState } from './payments.state';

export interface Creasy_State {
  layouts:LayoutsState;
  navigation:NavigationState;
  auth:AuthenticationState;
  me:MeState;
  users:UsersState;
  sessions:SessionsState;
  rooms:RoomsState; 
  msgs:MessagesState;
  contactUs:ContactUsState;
  tasks:TasksState;
  businesses:BusinessesState;
  payments:PaymentsState;
}
export * from "./layouts.state";
export * from "./navigation.state";
export * from "./auth.state";
export * from "./me.state";
export * from "./users.state";
export * from "./sessions.state";
export * from "./rooms.state";
export * from "./messages.state";
export * from "./contact-us.state";
export * from "./tasks.state";
export * from "./businesses.state";
export * from "./payments.state";
//add some stat type, exp pts for clients taking classes, show on leaderboard