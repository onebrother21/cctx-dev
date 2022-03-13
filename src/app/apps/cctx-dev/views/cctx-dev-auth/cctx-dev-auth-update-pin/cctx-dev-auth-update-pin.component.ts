import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { CCTXDevAuthService } from '../cctx-dev-auth.service';

@Component({
  selector: 'cctx-dev-auth-update-pin',
  templateUrl: './cctx-dev-auth-update-pin.component.html',
  styleUrls: ['./cctx-dev-auth-update-pin.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevAuthUpdatePinComponent {
  title = "cctx-dev-auth-update-pin";
  pinInput = {
    minlength:4,
    maxlength:4,
    masked:true
  }
  submitPin(pin:string){this.auth.send({type:"update-pin",pin});}
  updatePinForm:FormGroup;
  constructor(private auth:CCTXDevAuthService,private fb:FormBuilder){
    this.updatePinForm = this.fb.group({
      type:['update-pin',Validators.required],
      pin:['',Validators.required],
      confirm:['',Validators.required],
    });
  }
  get f(){return this.updatePinForm.controls;}
  submitForm(){
    const o = this.updatePinForm.value;
    this.updatePinForm.reset();
  }
}