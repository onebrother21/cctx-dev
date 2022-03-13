import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevPicAndPostService {
  private picAndPostAction = new Subject<any>();
  picAndPostAction$ = this.picAndPostAction.asObservable();
  send(change:any){this.picAndPostAction.next(change);}
}