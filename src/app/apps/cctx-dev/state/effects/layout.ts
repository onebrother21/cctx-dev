import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService,AppRoute,route$ } from "@state";
import { AppLayout } from "../models";
import { LayoutState } from "../states";
import { LayoutActions as Layout } from "../actions";
import { LayoutService } from "../services";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";

@Injectable()
export class LayoutEffects {
  constructor(
    private actions$:Actions,
    private layout:LayoutService,
    private app:AppService){}
  PostNavigation$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROUTER_NAVIGATION),
    map((action:RouterNavigationAction) => action.payload.routerState),
    mergeMap(() => ([
      Layout.toggleMobileNav(false),
      Layout.scrollTop(),
    ]))));
  ScrollToTop$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Layout.scrollTop),
    tap(() => this.app.win.scrollUp())),{dispatch:false});
  FetchLayout$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Layout.fetch),
    mergeMap(() =>
      this.layout.fetch().pipe(
        map((layout:AppLayout) => Layout.load(layout)),
        catchError(error => of(Layout.error(new AppError(error))))))));
}