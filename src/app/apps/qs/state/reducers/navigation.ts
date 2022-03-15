import { Action, createReducer, on } from "@ngrx/store";
import { AppEntity,AppRoute } from "@state";
import { NavigationActions as Navigation } from "../actions";
import { NavigationState,initializeNavigation } from "../states";

const initialState = initializeNavigation();
const reducer = createReducer(
  initialState,  
  on(Navigation.set,(s,{route}) => ({ ...s,requested:route})),
  on(Navigation.update,(s,{route,page}) => {
    const entity:AppEntity & AppRoute = {...route,...new AppEntity({})};
    const history = [...s.history||[],entity];
    return {...s,history,requested:null,page,error:null};}),
  on(Navigation.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function NavigationReducer(s:NavigationState|undefined,action:Action) {return reducer(s,action);}