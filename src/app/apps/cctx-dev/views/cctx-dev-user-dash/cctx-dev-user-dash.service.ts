import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CCTXDevIcon } from '@cctx-state';

@Injectable()
export class CCTXDevUserDashService {
  private userDashAction = new Subject<any>();
  userDashAction$ = this.userDashAction.asObservable();
  send(change:any){this.userDashAction.next(change);}
  menu:CCTXDevIcon[] = [
    {
      label:"Launch Session",
      text:"Already ready fye fye fye!",
      url:"/cctx/sessions/new",
      type:`code`,
    },{
      label:"Recent Sessions",
      text:"Creamy Crack, Project Anywhere...view more",
      url:"/cctx/sessions",
      type:`stack`,
    },{
      label:"Audioverse User Community",
      text:"See what's going on (eyeballs)...",
      url:"/cctx/audioverse",
      type:"users",
    },{
      label:"Account and Settings",
      text:"View or update my account details.",
      url:"/cctx/secure01",
      type:"lock",
    },
  ];
}