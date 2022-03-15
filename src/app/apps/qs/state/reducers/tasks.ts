import { Action, createReducer, on } from "@ngrx/store";
import { TasksActions as Tasks } from "../actions";
import { Task } from '../models';
import { TasksState,initializeTasks } from "../states";

const initialState = initializeTasks();
const reducer = createReducer(
  initialState,
  on(Tasks.fetch,s => ({...s,loading:true})),
  on(Tasks.load,(s,{tasks}) => ({...s,items:tasks,loading:false})),
  on(Tasks.loadMore,(s,{tasks}) => ({...s,items:[...(s.items||[]),...tasks],loading:false})),
  on(Tasks.select,(s,{task}) => ({ ...s,selected:{item:task,id:task.id,i:getIndex(s.items as Task[],task)}})),
  on(Tasks.deselect,(s) => ({ ...s,selected:null})),
  on(Tasks.error,(s,{error}) => ({ ...s,error:error.json(),loading:false})),
);

export function TasksReducer(s:TasksState|undefined,action:Action) {return reducer(s,action);}
const getIndex = <T extends Task>(a:T[],o:T) => a?a.findIndex(_a => o.id == _a.id):-1;