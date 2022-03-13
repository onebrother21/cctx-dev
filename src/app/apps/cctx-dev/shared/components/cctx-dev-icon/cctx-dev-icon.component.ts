import { Component,Input } from '@angular/core';
import { CCTXDevIcon } from '../../../state/types';

@Component({
  selector: 'cctx-dev-icon',
  templateUrl: './cctx-dev-icon.component.html',
  styleUrls: ['./cctx-dev-icon.component.scss'],
})
export class CCTXDevIconComponent {
  title = "cctx-dev-icon";
  @Input() item:CCTXDevIcon = {type:"",label:""};
}
