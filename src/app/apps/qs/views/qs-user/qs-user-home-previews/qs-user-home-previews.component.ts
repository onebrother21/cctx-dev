import { Component } from '@angular/core';
import { QS_Ad, QS_SessionRoomPreview } from '@qs-state';
import { QS_UserService } from '../qs-user.service';

@Component({
  selector: 'qs-user-home-previews',
  templateUrl: './qs-user-home-previews.component.html',
  styleUrls: ['./qs-user-home-previews.component.scss'],
})
export class QS_UserHomePreviewsComponent {
  title = "qs-user-home-previews";
  previews:(QS_SessionRoomPreview|QS_Ad)[] = this.user.previews;
  constructor(private user:QS_UserService){}
}
