import { Component } from '@angular/core';

@Component({
  selector: 'creasy-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.scss'],
})
export class Creasy_UserAccountComponent {
  title = "creasy-user-account";
  editAccount(){console.log("fields now open to edit");}
}
