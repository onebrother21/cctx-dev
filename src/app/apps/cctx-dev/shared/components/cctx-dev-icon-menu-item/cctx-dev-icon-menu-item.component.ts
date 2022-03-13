import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CCTXDevIcon } from '../../../state/types';

@Component({
  selector: 'cctx-dev-icon-menu-item',
  templateUrl: './cctx-dev-icon-menu-item.component.html',
  styleUrls: ['./cctx-dev-icon-menu-item.component.scss'],
})

export class CCTXDevIconMenuItemComponent {
  title = "cctx-dev-icon-menu-item";
  @Input() item:CCTXDevIcon = {label:"",type:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
