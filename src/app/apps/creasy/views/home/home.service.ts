import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class Creasy_HomeService {
  private homeAction = new Subject<any>();
  homeAction$ = this.homeAction.asObservable();
  send(change:any){this.homeAction.next(change);}
}