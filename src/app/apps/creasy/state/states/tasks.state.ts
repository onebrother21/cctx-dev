import { CommonStateWithEntities,initializeCommonStateWithEntities } from "@state";
import { Task } from "../models";

export interface TasksState extends CommonStateWithEntities<Task> {latest:Task[];}
export const initializeTasks = ():TasksState => ({
  ...initializeCommonStateWithEntities(),
  latest:[],
});