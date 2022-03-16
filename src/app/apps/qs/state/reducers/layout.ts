import { Action, createReducer, on } from "@ngrx/store";
import { LayoutActions as LAYOUT } from "../actions";
import {LayoutState,initializeLayout} from "../states";

const initialState = initializeLayout();
const reducer = createReducer(
  initialState,
  on(LAYOUT.fetch,s => ({...s,loading:true})),
  on(LAYOUT.load,(s,{layout}) => ({...s,...layout,loading:false})),
  on(LAYOUT.toggleMobileNav,(s,{open}) => ({ ...s,mobileNav:{...s.mobileNav,open:toggleMobileNav(s,open)}})),
  on(LAYOUT.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function LayoutReducer(s:LayoutState|undefined,action:Action) {return reducer(s,action);}
export const toggleMobileNav = (s:LayoutState,o?:boolean) => o !== undefined && o !== null?o:!s.mobileNav.open;