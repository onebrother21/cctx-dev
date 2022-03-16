import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { AppUser } from "../models";
import { AppUserActions as APPUSER } from "../actions";
import { AppUserService } from "../services";

@Injectable()
export class AppUserEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private user:AppUserService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return APPUSER.populate();}
  PopulateUser$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(APPUSER.populate),
    mergeMap(() => this.user.populate().pipe(
      map((user:AppUser) => APPUSER.load(user)),
      catchError(error => of(APPUSER.error(new AppError(error))))))));
}