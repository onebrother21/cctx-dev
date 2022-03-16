import { LayoutEffects } from './layout';
import { NavigationEffects } from './navigation';
import { ContactUsEffects } from './contact-us';
import { TasksEffects } from "./tasks";
import { ChatMessagesEffects } from './chat-msgs';
import { AppUserEffects } from './app-user';
import { AuthenticationEffects } from './auth';

export const EFFECTS = [
  LayoutEffects,
  NavigationEffects,
  ContactUsEffects,
  TasksEffects,
  ChatMessagesEffects,
  AppUserEffects,
  AuthenticationEffects,
];