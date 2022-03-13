import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevSessionsService {
  private sessionsAction = new Subject<any>();
  sessionsAction$ = this.sessionsAction.asObservable();
  send(change:any){this.sessionsAction.next(change);}
}