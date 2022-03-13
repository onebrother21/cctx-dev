import { Injectable } from "@angular/core";
import { CCTXDevMediaSession } from "@cctx/shared";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevSessionsService {
  private sessionsAction = new Subject<any>();
  sessionsAction$ = this.sessionsAction.asObservable();
  send(change:any){this.sessionsAction.next(change);}
  items:CCTXDevMediaSession[] = [
    {id:"01",title:"Creamy Crack",lastUpd:"3/11/22 3:00pm",collaborators:[{name:"Jackswift"},{name:"BreezeAwesome"},{name:"ThatGirlNikki"}]},
    {id:"02",title:"Project Anywhr",lastUpd:"3/11/22 3:00pm",collaborators:[{name:"Jackswift"}]},
    {id:"03",title:"Superfye!",lastUpd:"3/10/22 11:00pm",collaborators:[{name:"Jackswift"}]},
    {id:"04",title:"Pandora Bound",lastUpd:"3/9/22 5:45pm",collaborators:[{name:"Jackswift"}]},
  ];
}