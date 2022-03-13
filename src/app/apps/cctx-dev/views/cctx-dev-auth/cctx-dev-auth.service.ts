import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevAuthService {
  private authAction = new Subject<any>();
  authAction$ = this.authAction.asObservable();
  send(change:any){this.authAction.next(change);}
}