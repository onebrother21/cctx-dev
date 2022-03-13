import { CommonState,initializeCommonState } from "@state";
import { AppLayout } from "../models";

export interface LayoutState extends CommonState,AppLayout {}
export const initializeLayout = ():LayoutState => ({
  ...initializeCommonState(),
  header:{},
  mobileNav:{},
  footer:{open:true},
  main:{open:true},
  pagination:{},
});