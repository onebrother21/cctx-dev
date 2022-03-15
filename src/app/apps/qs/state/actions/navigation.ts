import { createAction } from "@ngrx/store";
import { AppError,AppRoute } from  "@state";

export const NavigationActions = {
  go:createAction("@qs/navigation/go",(route:AppRoute) => ({route})),
  back:createAction("@qs/navigation/back",(route:AppRoute) => ({route})),
  forward:createAction("@qs/navigation/forward",(route:AppRoute) => ({route})),
  set:createAction("@qs/navigation/set",(route:AppRoute) => ({route})),
  update:createAction("@qs/navigation/update",(o:{route:AppRoute;page:string}) => o),
  notFound:createAction("@qs/navigation/404",(url:string) => ({url})),
  error:createAction("@qs/navigation/error",(error:AppError) => ({error})),
};