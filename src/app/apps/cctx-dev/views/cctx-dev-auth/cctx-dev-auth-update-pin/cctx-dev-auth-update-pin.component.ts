import { Component } from '@angular/core';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-update-pin',
  templateUrl: './cctx-dev-auth-update-pin.component.html',
  styleUrls: ['./cctx-dev-auth-update-pin.component.scss'],
})
export class CCTXDevAuthUpdatePinComponent {
  title = "cctx-dev-auth-update-pin";
  greeting = "Create A Pin";
  confirm:string = "";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  constructor(private auth:CCTXDevAuthService){}
  submitPin(pin:string){
    if(!this.confirm){this.confirm = pin;this.greeting = "Confirm Your Pin";}
    else if(this.confirm == pin) this.auth.send({type:"update-pin",pin});
    else return;
  }
}