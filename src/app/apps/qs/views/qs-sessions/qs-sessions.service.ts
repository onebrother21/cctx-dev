import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  QS_Session,
  QS_SessionComment,
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
  QS_SessionRoomPreview,
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
  rooms:QS_SessionRoomPreview[] = [
    {
      id:'01',
      type:"preview",
      name:"smokebaby",
      rank:29,
      members:[{name:"DJ Monarch"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"she-on-fireree.jpg",
    },{
      id:'02',
      type:"preview",
      name:"big chillin",
      rank:59,
      members:[{name:"Jackswift"}],
      duration:"58 min",
      viewCt:1112,
      commentCt:56,
      img:"Biggie-in-the-studio.jpg",
    },{
      id:'03',
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"37 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      id:'04',
      type:"preview",
      name:"fiesty freestyle",
      rank:59,
      members:[{name:"BreezeAwesome"},{name:"Two Chains"}],
      duration:"16 hrs, 52 min",
      viewCt:1112,
      commentCt:56,
      img:"JAMMING.jpg",
    },{
      id:'05',
      type:"preview",
      name:"two more hits",
      rank:59,
      members:[{name:"AshBeeee"}],
      duration:"1 hr, 20 min",
      viewCt:1112,
      commentCt:56,
      img:"How-to-Start-a-Band.jpg",
    },{
      id:'06',
      type:"preview",
      name:"the bar room, V2",
      rank:59,
      members:[{name:"SouthSide Slug"}],
      duration:"18 min",
      viewCt:1112,
      commentCt:56,
      img:"apricot-jam.jpg",
    },
  ];
  constructor(private app:AppService){this.contactUsMsg = this.app.select(contactUsMsg$);}
}