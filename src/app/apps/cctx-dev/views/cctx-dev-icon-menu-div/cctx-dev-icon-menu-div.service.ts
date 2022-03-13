import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevIconMenuDivService {
  private iconMenuDivAction = new Subject<any>();
  iconMenuDivAction$ = this.iconMenuDivAction.asObservable();
  send(change:any){this.iconMenuDivAction.next(change);}
}