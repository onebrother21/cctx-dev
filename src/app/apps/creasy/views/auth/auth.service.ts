import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  Creasy_AuthenticationActions as AUTH,
  authLoading$
} from "@creasy-state";
import { Observable } from "rxjs";

@Injectable()
export class Creasy_AuthService {
  loading:Observable<boolean> = new Observable();
  constructor(private app:AppService){
    this.loading = this.app.select(authLoading$);
  }
  send(o:any){
    switch(o.action){
      case "signup":this.app.do(AUTH.signup(o));break;
      case "signin":this.app.do(AUTH.signin(o));break;
      case "verify":this.app.do(AUTH.verify(o));break;
      case "register":this.app.do(AUTH.register(o));break;
      case "register-ext":this.app.do(AUTH.registerExt(o));break;
      case "update-pin":this.app.do(AUTH.updatePin(o));break;
      case "login":this.app.do(AUTH.login(o));break;
      default:break;
    }
  }
}