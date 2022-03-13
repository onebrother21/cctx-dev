import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevSmallCardListService {
  private smallCardListAction = new Subject<any>();
  smallCardListAction$ = this.smallCardListAction.asObservable();
  send(change:any){this.smallCardListAction.next(change);}
}