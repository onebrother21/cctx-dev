import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of,withLatestFrom } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { AppUser } from "../models";
import { AuthenticationActions as AUTH,NavigationActions as NAV } from "../actions";
import { AuthenticationService } from "../services";
import { appuser$ } from "../selectors";

@Injectable()
export class AuthenticationEffects {
  constructor(
    private actions$:Actions,
    private auth:AuthenticationService,
    private app:AppService){}
  //ngrxOnInitEffects():Action {return AUTH.populate();}
  Signin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signin),
    mergeMap(o => this.auth.signin(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Signup$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.signup),
    mergeMap(o => this.auth.signup(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Verify$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.verify),
    withLatestFrom(this.app.select(appuser$)),
    map(([o,_o]) => ({...o,username:_o?_o.username:""})),
    mergeMap(o => this.auth.verify(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Register$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.register),
    mergeMap(o => this.auth.register(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  UpdatePin$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.updatePin),
    withLatestFrom(this.app.select(appuser$)),
    map(([o,_o]) => ({...o,username:_o?_o.username:""})),
    mergeMap(o => this.auth.updatePin(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Login$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.login),
    withLatestFrom(this.app.select(appuser$)),
    map(([o,_o]) => ({...o,username:_o?_o.username:""})),
    mergeMap(o => this.auth.login(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  Forgot$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.forgot),
    mergeMap(o => this.auth.forgot(o).pipe(
      map(auth => AUTH.load(auth)),
      catchError(error => of(AUTH.error(new AppError(error))))))));
  navigateAuthPage$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(AUTH.load),
    mergeMap(o => this.auth.navigateAuthentication(o?o.action||"":"").pipe(
      map(url => NAV.go({url})),
      catchError(error => of(AUTH.error(new AppError(error))))))));
}