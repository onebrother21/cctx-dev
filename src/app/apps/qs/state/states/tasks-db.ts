import { Task, TaskAgent, TaskTypes } from '../models';

export const taskTypes:TaskTypes = {
  "onboarding":"Onboarding",
  "new-lead":"New Lead",
  "doc-review":"Doc Review",
  "course-proposal":"Proposal",
  "course-report":"Report",
  "instructor-inquiry":"Inquiry",
  "instructor-payout":"Payout",
  "tutor-inquiry":"Inquiry",
  "tutor-report":"Report",
  "tutor-payout":"Payout",
};
export const agents:TaskAgent[] = [
  {
    username:"tiabia",
    phn:"340-893-2724",
    name:{first:"Tia",last:"McBia"},
    id:"sdsds",
    img:"lncnsjcnj",
    email:"sjhhhhhcdscj",
    created:new Date("11/22/2020")},
  {
    username:"jackswift",
    phn:"904-247-8293",
    name:{first:"Jack",last:"Johnson"},
    id:"sdsds",
    img:"lncnsjcnj",
    email:"jahscjbcywc",
    created:new Date("11/22/2020")},
];
export const tasks:Task[] = [
  {id:"1",created:new Date("06/06/2020"),agent:null,type:"onboarding",dueOn:new Date("05/24/2020"),progress:63.50},
  {id:"2",created:new Date("06/06/2020"),type:"new-lead",agent:agents[0],dueOn:new Date("05/21/2020"),progress:63.50},
  {id:"3",created:new Date("06/06/2020"),type:"new-lead",agent:agents[1],dueOn:new Date("05/19/2020"),progress:63.50},
  {id:"4",created:new Date("06/06/2020"),type:"doc-review",agent:null,dueOn:new Date("05/24/2020"),progress:0},
];