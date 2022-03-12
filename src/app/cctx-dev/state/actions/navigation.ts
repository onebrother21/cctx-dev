import { createAction } from "@ngrx/store";
import { AppError,AppRoute } from  "@state";

export const NavigationActions = {
  go:createAction("@cctx-dev/navigation/go",(route:AppRoute) => ({route})),
  back:createAction("@cctx-dev/navigation/back",(route:AppRoute) => ({route})),
  forward:createAction("@cctx-dev/navigation/forward",(route:AppRoute) => ({route})),
  set:createAction("@cctx-dev/navigation/set",(route:AppRoute) => ({route})),
  update:createAction("@cctx-dev/navigation/update",(o:{route:AppRoute;page:string}) => o),
  notFound:createAction("@cctx-dev/navigation/404",(url:string) => ({url})),
  error:createAction("@cctx-dev/navigation/error",(error:AppError) => ({error})),
};