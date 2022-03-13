import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevUserDashService {
  private userDashAction = new Subject<any>();
  userDashAction$ = this.userDashAction.asObservable();
  send(change:any){this.userDashAction.next(change);}
}