import { CommonState,initializeCommonState,Entity,AppRoute } from "@state";

export interface NavigationState extends CommonState<AppRoute & Entity> {requested?:AppRoute;page:string;}
export const initializeNavigation = ():NavigationState => ({
  ...initializeCommonState(true),
  page:"",
});
export * from "./nav-routes";