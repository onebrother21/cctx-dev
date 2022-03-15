import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  QS_Session,
  QS_SessionComment,
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "@qs-state";
import { Observable, Subject } from "rxjs";

@Injectable()
export class QS_SessionsService {
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
  items:QS_Session[] = [
    {
      id:"01",
      name:"Creamy Crack",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/11/22 3:00pm",
      members:[{name:"Jackswift"},{name:"BreezeAwesome"},{name:"ThatGirlNikki"}]
    },{
      id:"02",
      name:"Project Anywhr",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/11/22 3:00pm",
      members:[{name:"Jackswift"}]
    },{
      id:"03",
      name:"Superfye!",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/10/22 11:00pm",
      members:[{name:"Jackswift"}]
    },{
      id:"04",
      name:"Pandora Bound",
      duration:"5 min",
      created:"3/11/22 3:00pm",
      updated:"3/9/22 5:45pm",
      members:[{name:"Jackswift"}]
    },
  ];
  constructor(private app:AppService){this.contactUsMsg = this.app.select(contactUsMsg$);}
}