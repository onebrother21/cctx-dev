import { LayoutState } from './layout';
import { NavigationState } from './navigation';
import { ContactUsState } from './contact-us';
import { TasksState } from "./tasks";
import { ChatMessagesState } from './chat-msgs';
import { AppUserState } from './app-user';
import { AuthenticationState } from './auth';

export interface QS_State {
  layout:LayoutState;
  navigation:NavigationState;
  contactUs:ContactUsState;
  tasks:TasksState;
  msgs:ChatMessagesState;
  user:AppUserState;
  auth:AuthenticationState;
}

export * from "./layout";
export * from "./navigation";
export * from "./contact-us";
export * from "./tasks";
export * from "./chat-msgs";
export * from "./app-user";
export * from "./auth";

//add some stat type, exp pts for clients taking classes, show on leaderboard