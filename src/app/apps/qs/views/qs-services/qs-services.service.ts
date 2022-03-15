import { Injectable } from "@angular/core";
import { QS_Icon } from '@qs-state';
import { Subject } from "rxjs";

@Injectable()
export class QS_ServicesService {
  private servicesAction = new Subject<any>();
  servicesAction$ = this.servicesAction.asObservable();
  send(change:any){this.servicesAction.next(change);}
  menu:QS_Icon[] = [
    {
      label:"FAQ",
      text:"Got a question? Check here first.",
      url:"/cctx/services/faq",
      type:"fa",
      class:"fa fa-question-circle"
    },{
      label:"Live Chat",
      text:"Chat with our support team now.",
      url:"/cctx/services/chat",
      type:"fa",
      class:"fa fa-comment-dots"
    },{
      label:"Contact Us",
      text:"Our customer support is here for you.",
      url:"/cctx/services/contact",
      type:"fa",
      class:"fa fa-envelope"
    },
  ];
}