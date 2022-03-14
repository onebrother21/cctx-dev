import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "@cctx-state";
import { Observable } from "rxjs";

@Injectable()
export class CCTXDevErrorService {
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
  constructor(private app:AppService){this.contactUsMsg = this.app.select(contactUsMsg$);}
  send(o:any){this.app.do(Navigation.go({url:this.getNextErrorPage(o.type)}));}
  getNextErrorPage(type:string){
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