import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevErrorService {
  private errorAction = new Subject<any>();
  errorAction$ = this.errorAction.asObservable();
  send(change:any){this.errorAction.next(change);}
}