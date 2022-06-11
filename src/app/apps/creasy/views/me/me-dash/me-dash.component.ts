import { Component } from '@angular/core';
import { Creasy_Icon } from '@creasy-state';
import { Creasy_UserService } from '../me.service';

@Component({
  selector: 'creasy-user-dash',
  templateUrl: './user-dash.component.html',
  styleUrls: ['./user-dash.component.scss'],
})
export class Creasy_UserDashComponent {
  title = "creasy-user-dash";
  menu:Creasy_Icon[] = this.user.menu;
  constructor(private user:Creasy_UserService){}
  selectItem(item:Creasy_Icon){console.log(item);}
}
