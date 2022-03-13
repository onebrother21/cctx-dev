import { Component,Input,Output,EventEmitter,ViewEncapsulation } from '@angular/core';
import { CCTXDevIcon } from '../../../state/types';

@Component({
  selector: 'cctx-dev-icon-menu',
  templateUrl: './cctx-dev-icon-menu.component.html',
  styleUrls: ['./cctx-dev-icon-menu.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevIconMenuComponent {
  title = "cctx-dev-icon-menu";
  @Input() items:CCTXDevIcon[] = [];
  @Output() select:EventEmitter<CCTXDevIcon> = new EventEmitter();
}
