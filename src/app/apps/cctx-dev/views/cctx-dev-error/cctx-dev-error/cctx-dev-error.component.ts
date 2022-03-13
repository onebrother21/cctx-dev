import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cctx-dev-error',
  templateUrl: './cctx-dev-error.component.html',
  styleUrls: ['./cctx-dev-error.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevErrorComponent {
  title = "cctx-dev-error";
  errors = [
    {
      message:"Looks like you're a bit lost...click here to go back",
    },{
      type:"server-error",
      message:"Looks like you're a bit lost...click here to go back",
    },
  ];
}
