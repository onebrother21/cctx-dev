import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { Message } from "../models";
import { MessagesActions as CHAT } from "../actions";
import { AppService,MessagesService } from "../services";

@Injectable()
export class MessagesEffects {
  constructor(
    private actions$:Actions,
    private msgs:MessagesService,
    private app:AppService){}
  fetchMessages$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.fetch),
    mergeMap(() => this.msgs.fetch().pipe(
      map(msgs => CHAT.load(msgs)),
      catchError(error => of(CHAT.error(error)))))));
  SendMessage$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.send),
    map(o => o.payload),
    mergeMap(o => this.msgs.send(o).pipe(
      map(msg => CHAT.loadOne(msg)),
      catchError(error => of(CHAT.error(error)))))));
}