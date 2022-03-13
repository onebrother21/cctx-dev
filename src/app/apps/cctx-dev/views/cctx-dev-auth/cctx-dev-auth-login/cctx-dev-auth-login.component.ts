import { Component } from '@angular/core';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-login',
  templateUrl: './cctx-dev-auth-login.component.html',
  styleUrls: ['./cctx-dev-auth-login.component.scss'],
})
export class CCTXDevAuthLoginComponent {
  title = "cctx-dev-auth-login";
  greeting = "Enter Your Pin";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  constructor(private auth:CCTXDevAuthService){}
  submitPin(pin:string){this.auth.send({type:"login",pin});}
}