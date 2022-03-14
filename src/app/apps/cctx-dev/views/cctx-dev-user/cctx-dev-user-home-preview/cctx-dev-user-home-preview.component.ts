import { Component,Input,Output,EventEmitter } from '@angular/core';
import { CCTXDevSessionRoom } from '@cctx/shared';



@Component({
  selector: 'cctx-dev-user-home-preview',
  templateUrl: './cctx-dev-user-home-preview.component.html',
  styleUrls: ['./cctx-dev-user-home-preview.component.scss'],
})
export class CCTXDevUserHomePreviewComponent {
  title = "cctx-dev-user-home-preview";
  @Input() preview:CCTXDevSessionRoom = {
    title:"",
    members:[],
    duration:"",
    views:0,
    comments:0,
  };
  @Output() select:EventEmitter<any> = new EventEmitter();
  isLast = 1;
}
