import { Action, createReducer, on } from "@ngrx/store";
import { LayoutActions as Layout } from "../actions";
import {LayoutState,initializeLayout} from "../states";

const initialState = initializeLayout();
const reducer = createReducer(
  initialState,
  on(Layout.fetch,s => ({...s,loading:true})),
  on(Layout.load,(s,{layout}) => ({...s,...layout,loading:false})),
  on(Layout.toggleMobileNav,(s,{open}) => ({ ...s,mobileNav:{...s.mobileNav,open:toggleMobileNav(s,open)}})),
  on(Layout.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function LayoutReducer(s:LayoutState|undefined,action:Action) {return reducer(s,action);}
export const toggleMobileNav = (s:LayoutState,o?:boolean) => o !== undefined && o !== null?o:!s.mobileNav.open;