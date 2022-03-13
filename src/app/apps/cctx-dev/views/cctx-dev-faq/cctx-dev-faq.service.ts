import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevFAQService {
  private faqAction = new Subject<any>();
  faqAction$ = this.faqAction.asObservable();
  send(change:any){this.faqAction.next(change);}
}