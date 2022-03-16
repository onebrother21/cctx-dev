import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,Effect } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError } from "rxjs/operators";

import { AppError,AppService,AppRoute,route$ } from "@state";
import { ContactUsMsg } from "../models";
import { ContactUsState } from "../states";
import { ContactUsActions as CONTACTUS } from "../actions";
import { ContactUsService } from "../services";
import { ROUTER_NAVIGATION, RouterNavigationAction } from "@ngrx/router-store";

@Injectable()
export class ContactUsEffects {
  constructor(
    private actions$:Actions,
    private contactUs:ContactUsService,
    private app:AppService){}
  SendContactUs$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(CONTACTUS.send),
    mergeMap(({msg}) => this.contactUs.send(msg).pipe(
      map((msg:ContactUsMsg) => CONTACTUS.loadOne(msg)),
      catchError(error => of(CONTACTUS.error(new AppError(error))))))));
}