import { Component,Input,Output,EventEmitter,ViewEncapsulation } from '@angular/core';
import { CCTXDevIcon } from '../../types';

@Component({
  selector: 'cctx-dev-icon-menu-item',
  templateUrl: './cctx-dev-icon-menu-item.component.html',
  styleUrls: ['./cctx-dev-icon-menu-item.component.scss'],
  //encapsulation:ViewEncapsulation.None
})

export class CCTXDevIconMenuItemComponent {
  title = "cctx-dev-icon-menu-item";
  @Input() item:CCTXDevIcon = {label:"",html:""};
  @Output() select:EventEmitter<any> = new EventEmitter();
}
