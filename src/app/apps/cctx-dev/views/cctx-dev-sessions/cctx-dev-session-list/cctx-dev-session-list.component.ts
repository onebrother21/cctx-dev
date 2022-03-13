import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cctx-dev-session-list',
  templateUrl: './cctx-dev-session-list.component.html',
  styleUrls: ['./cctx-dev-session-list.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevSessionListComponent {
  title = "cctx-dev-session-list";
  sessions = [
    {id:"01",title:"Creamy Crack",lastUpd:"3/11/22 3:00pm",collaborators:[{name:"Jackswift"},{name:"BreezeAwesome"},{name:"ThatGirlNikki"}]},
    {id:"02",title:"Project Anywhere",lastUpd:"3/11/22 3:00pm",collaborators:[{name:"Jackswift"}]},
    {id:"03",title:"Superfye!",lastUpd:"3/10/22 11:00pm",collaborators:[{name:"Jackswift"}]},
    {id:"04",title:"Pandora Bound",lastUpd:"3/9/22 5:45pm",collaborators:[{name:"Jackswift"}]},
  ]
}
