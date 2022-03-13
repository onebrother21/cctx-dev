import { CommonState,initializeCommonState,Entity,AppRoute } from "@state";

export interface NavigationState extends CommonState<AppRoute & Entity> {
  requested?:AppRoute|null;
  page:string|null;}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonState(true),
  requested:null,
  page:"",
});
export * from "./nav-routes";