import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  QS_Icon,
  QS_Ad,
  QS_SessionRoomPreview,
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "@qs-state";
import { Observable } from "rxjs";

@Injectable()
export class QS_UserService {
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
  menu:QS_Icon[] = [
    {
      label:"Launch Session",
      text:"Let's get to it!",
      url:"/cctx/sessions/new",
      type:`code`,
    },{
      label:"Recent Sessions",
      text:`Creamy Crack,\n Project Anywhere,\n 8 more`,
      url:"/cctx/sessions",
      type:`stack`,
    },{
      label:"Audioverse User Community",
      text:"See what's going on (eyeballs)...",
      url:"/cctx/audioverse",
      type:"users",
    },{
      label:"Account and Settings",
      text:"View or update my account details.",
      url:"/cctx/user/me",
      type:"lock",
    },
  ];
  previews:(QS_SessionRoomPreview|QS_Ad)[] = [
    {
      type:"ad",
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      type:"preview",
      name:"smokebaby",
      rank:29,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"she-on-fireree.jpg",
    },{
      type:"preview",
      name:"big chillin",
      rank:59,
      members:[{name:"Jackswift"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"Biggie-in-the-studio.jpg",
    },{
      type:"ad",
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"ad",
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"ad",
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },{
      type:"preview",
      name:"advanced",
      rank:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      viewCt:1112,
      commentCt:56,
      img:"studio-1.jpeg",
    },
  ];
  constructor(private app:AppService){this.contactUsMsg = this.app.select(contactUsMsg$);}
  send(o:any){this.app.do(Navigation.go({url:this.getNextUserPage(o.type)}));}
  getNextUserPage(type:string){
    switch(type){
      case "signup":return "/secur01/verify";
      case "verify":return "/secur01/register";
      case "register":return "/secur01/update-pin";
      case "signin":return "/secur01/login";
      case "update-pin":
      case "login":return "/user";
      default:return "/";
    }
  }
}