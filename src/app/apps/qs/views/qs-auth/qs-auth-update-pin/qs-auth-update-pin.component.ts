import { Component } from '@angular/core';
import { QS_AuthService } from '../qs-auth.service';

@Component({
  selector: 'qs-auth-update-pin',
  templateUrl: './qs-auth-update-pin.component.html',
  styleUrls: ['./qs-auth-update-pin.component.scss'],
})
export class QS_AuthUpdatePinComponent {
  title = "qs-auth-update-pin";
  greeting = "Create A Pin";
  confirm:string = "";
  pinConfig = {
    minlength:4,
    maxlength:4,
    masked:true
  };
  constructor(private auth:QS_AuthService){}
  submitPin(pin:string){
    if(!this.confirm){this.confirm = pin;this.greeting = "Confirm Your Pin";}
    else if(this.confirm == pin) this.auth.send({type:"update-pin",pin});
    else return;
  }
}