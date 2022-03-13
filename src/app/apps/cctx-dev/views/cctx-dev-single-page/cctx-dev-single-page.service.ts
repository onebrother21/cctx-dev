import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevSinglePageService {
  private singlePageAction = new Subject<any>();
  singlePageAction$ = this.singlePageAction.asObservable();
  send(change:any){this.singlePageAction.next(change);}
}