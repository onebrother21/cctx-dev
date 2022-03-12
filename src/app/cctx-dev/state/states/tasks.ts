import { CommonState,initializeCommonState,Entity } from "@state";
import { Task } from "../models";

export interface TasksState extends CommonState<Task> {}
export const initializeTasks = ():TasksState => ({
  ...initializeCommonState(false,true),
});
export * from "./tasks-db";