import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { QS_Room } from "../models";
import { QS_RoomsActions as ROOMS } from "../actions";
import { QS_RoomsService } from "../services";

@Injectable()
export class QS_RoomsEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private rooms:QS_RoomsService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return ROOMS.fetch();}
  fetchQS_Rooms$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOMS.fetch),
    mergeMap(() => this.rooms.fetch().pipe(
      map((rooms:QS_Room[]) => ROOMS.load(rooms)),
      catchError(error => of(ROOMS.error(new AppError(error))))))));
  createQS_Room$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(ROOMS.create),
    map(o => o.payload),
    mergeMap(o => this.rooms.send(o).pipe(
      map((room:QS_Room) => ROOMS.loadMore([room])),
      catchError(error => of(ROOMS.error(new AppError(error))))))));
}