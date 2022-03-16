import { Injectable } from "@angular/core";
import { Actions,createEffect,ofType } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { ChatMsg } from "../models";
import { ChatMessagesActions as CHAT } from "../actions";
import { ChatMessagesService } from "../services";

@Injectable()
export class ChatMessagesEffects {
  constructor(
    private actions$:Actions,
    private msgs:ChatMessagesService,
    private app:AppService){}
  SendChatMessages$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CHAT.send),
    mergeMap(({msg}) => this.msgs.send(msg).pipe(
      map((msg:ChatMsg) => CHAT.loadOne(msg)),
      catchError(error => of(CHAT.error(new AppError(error))))))));
}