import { AppState as State } from "@state";
import { LayoutState } from './layout';
import { NavigationState } from './navigation';
import { ContactUsState } from './contact-us';
import { TasksState } from "./tasks";
import { ChatMessagesState } from './chat-msgs';
import { AppUserState } from './app-user';

export interface CCTXDevState {
  layout:LayoutState;
  navigation:NavigationState;
  contactUs:ContactUsState;
  tasks:TasksState;
  msgs:ChatMessagesState;
  user:AppUserState;
}

export * from "./layout";
export * from "./navigation";
export * from "./contact-us";
export * from "./tasks";
export * from "./chat-msgs";
export * from "./app-user";

//add some stat type, exp pts for clients taking classes, show on leaderboard