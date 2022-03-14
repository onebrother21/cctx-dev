import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  CCTXDevIcon,
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "@cctx-state";
import { Observable } from "rxjs";

@Injectable()
export class CCTXDevUserService {
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
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
      url:"/cctx/user/me",
      type:"lock",
    },
  ];
  constructor(private app:AppService){this.contactUsMsg = this.app.select(contactUsMsg$);}
  send(o:any){this.app.do(Navigation.go({url:this.getNextUserPage(o.type)}));}
  getNextUserPage(type:string){
    switch(type){
      case "signup":return "/secur01/verify";
      case "verify":return "/secur01/register";
      case "register":return "/secur01/update-pin";
      case "signin":return "/secur01/login";
      case "update-pin":
      case "login":return "/user";
      default:return "/";
    }
  }
}