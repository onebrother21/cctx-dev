import { Injectable } from '@angular/core';
import { Actions,ofType,Effect,createEffect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { 
  ROUTER_REQUEST,
  ROUTER_NAVIGATION,
  RouterNavigationAction,
  RouterRequestAction} from '@ngrx/router-store';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map,tap,mergeMap,withLatestFrom } from 'rxjs/operators';
import { AppService,route$ } from "@state";
import { NavigationActions as Navigation } from '../actions';
import { mainNav } from '../states';
import { NavigationService } from '../services';

@Injectable()
export class NavigationEffects {
  constructor(
    private actions$:Actions,
    private app:AppService,
    private router:Router,
    private nav:NavigationService){}
  PreNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_REQUEST),
    map((action:RouterRequestAction) => action.payload),
    map(({event,routerState:state}) => this.nav.getRequestedRoute(event,state)), 
    mergeMap(route => [Navigation.set(route)])));
  PostNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    withLatestFrom(this.app.select(route$)),
    map(([,route]) => ({route,page:this.nav.getPageTitle(route.url)})),
    mergeMap(o => ([Navigation.update(o)]))));
  PageNotFound$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Navigation.notFound),
    tap(({url}) => {
      const baseref = mainNav[0].link;
      const errUrl = (baseref == "/"?"":baseref) + "/error";
      this.router.navigate([errUrl,{queryParams:url}]);})),
    {dispatch:false});
  Go$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Navigation.go),
    tap(({route:{url}}) => {
      const baseref = mainNav[0].link;
      this.router.navigate([baseref+url]);})),
    {dispatch:false});
  Back$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Navigation.back),
    tap(({route:{url}}) => {
      const baseref = mainNav[0].link;
      this.router.navigate([baseref+url]);})),
    {dispatch:false});
  Forward$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Navigation.forward),
    tap(({route:{url}}) => {
      const baseref = mainNav[0].link;
      this.router.navigate([baseref+url]);})),
    {dispatch:false});
}