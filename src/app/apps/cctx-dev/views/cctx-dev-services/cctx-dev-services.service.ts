import { Injectable } from "@angular/core";
import { CCTXDevIcon } from "@cctx-shared";
import { Subject } from "rxjs";

@Injectable()
export class CCTXDevServicesService {
  private servicesAction = new Subject<any>();
  servicesAction$ = this.servicesAction.asObservable();
  send(change:any){this.servicesAction.next(change);}
  menu:CCTXDevIcon[] = [
    {
      label:"Contact Us",
      text:"Our customer support is here for you.",
      url:"/cctx/services/contact",
      type:"updown",
    },
  ];
}