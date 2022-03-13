
import { Component } from "@angular/core";
import { AppService } from "@state";
import {
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "app/apps/cctx-dev/state";
import { Observable } from "rxjs";
import { CCTXDevAuthService } from "../cctx-dev-auth.service";

@Component({
  selector: 'cctx-dev-auth',
  templateUrl: './cctx-dev-auth.component.html',
  styleUrls: ['./cctx-dev-auth.component.scss'],
})
export class CCTXDevAuthComponent {
  title = "cctx-dev-auth";
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
  constructor(private app:AppService,private auth:CCTXDevAuthService){
    this.contactUsMsg = this.app.select(contactUsMsg$);
    this.auth.authAction$.subscribe(form => this.sendContactUsMsg(form));
  }
  sendContactUsMsg(o:any){//ContactUsMsg){
    console.log(o);
    switch(o.type){
      case "signup":this.app.do(Navigation.go({url:"/secure01/verify"}));break;
      case "verify":this.app.do(Navigation.go({url:"/secure01/register"}));break;
      case "register":this.app.do(Navigation.go({url:"/secure01/update-pin"}));break;
      case "update-pin":this.app.do(Navigation.go({url:"/dash"}));break;
      default:break;
    }
  }//this.app.do(ContactUs.send(o));}
}
