import { AppEntity } from '@state';
import { AppUser } from "./app-user";

export type TaskAgent = AppUser;
export type TaskTypes = {
  "onboarding":"Onboarding";
  "new-lead":"New Lead";
  "doc-review":"Doc Review";
  "course-proposal":"Proposal";
  "course-report":"Report";
  "tutor-inquiry":"Inquiry";
  "tutor-report":"Report";
  "tutor-payout":"Payout";
  "instructor-inquiry":"Inquiry";
  "instructor-payout":"Payout";
};
export type TaskType = keyof TaskTypes;
export type TaskName = {[k in TaskType]:TaskTypes[k]}[TaskType];
export type Task = AppEntity & {
  type:TaskType|TaskName;
  agent:TaskAgent|null;
  dueOn:Date;
  progress:number;
  notes?:string[];
};