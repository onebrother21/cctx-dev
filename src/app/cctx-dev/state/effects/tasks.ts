import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType,OnInitEffects } from "@ngrx/effects";
import { Action } from "@ngrx/store";
import { Observable,of } from "rxjs";
import { mergeMap,map,tap,catchError,withLatestFrom } from "rxjs/operators";

import { AppError,AppService } from "@state";
import { Task } from "../models";
import { TasksActions as Tasks } from "../actions";
import { TasksService } from "../services";

@Injectable()
export class TasksEffects implements OnInitEffects {
  constructor(
    private actions$:Actions,
    private tasks:TasksService,
    private app:AppService){}
  ngrxOnInitEffects():Action {return Tasks.fetch();}
  fetchTasks$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Tasks.fetch),
    mergeMap(() => this.tasks.fetch().pipe(
      map((tasks:Task[]) => Tasks.load(tasks)),
      catchError(error => of(Tasks.error(new AppError(error))))))));
  createTask$:Observable<Action> = createEffect(() => this.actions$.pipe(
    ofType(Tasks.create),
    mergeMap(({task}) => this.tasks.send(task).pipe(
      map((task:Task) => Tasks.loadMore([task])),
      catchError(error => of(Tasks.error(new AppError(error))))))));
}