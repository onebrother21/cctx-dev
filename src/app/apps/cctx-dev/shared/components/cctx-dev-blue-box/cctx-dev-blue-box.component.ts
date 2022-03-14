import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'cctx-dev-blue-box',
  templateUrl: './cctx-dev-blue-box.component.html',
  styleUrls: ['./cctx-dev-blue-box.component.scss'],
})
export class CCTXDevBlueBoxComponent {
  title = "cctx-dev-blue-box";
  @Input() bluebox:{header:string;content:string;} = {header:"",content:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
