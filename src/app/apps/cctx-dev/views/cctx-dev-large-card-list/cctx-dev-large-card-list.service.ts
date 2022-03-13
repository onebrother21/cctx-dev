import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevLargeCardListService {
  private largeCardListAction = new Subject<any>();
  largeCardListAction$ = this.largeCardListAction.asObservable();
  send(change:any){this.largeCardListAction.next(change);}
}