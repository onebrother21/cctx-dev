import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevBannerService {
  private bannerAction = new Subject<any>();
  bannerAction$ = this.bannerAction.asObservable();
  send(change:any){this.bannerAction.next(change);}
}