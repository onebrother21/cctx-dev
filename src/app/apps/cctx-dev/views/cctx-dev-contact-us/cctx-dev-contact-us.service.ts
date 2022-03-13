import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevContactUsService {
  private contactUsAction = new Subject<any>();
  contactUsAction$ = this.contactUsAction.asObservable();
  send(change:any){this.contactUsAction.next(change);}
}