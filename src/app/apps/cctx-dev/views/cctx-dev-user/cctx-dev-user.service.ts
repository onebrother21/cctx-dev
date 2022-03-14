import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  CCTXDevIcon,
  CCTXDevSessionRoom,
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "@cctx-state";
import { Observable } from "rxjs";

@Injectable()
export class CCTXDevUserService {
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
  menu:CCTXDevIcon[] = [
    {
      label:"Launch Session",
      text:"Already ready fye fye fye!",
      url:"/cctx/sessions/new",
      type:`code`,
    },{
      label:"Recent Sessions",
      text:"Creamy Crack, Project Anywhere...view more",
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
  previews:CCTXDevSessionRoom[] = [
    {
      title:"smokebaby",
      amt:29,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:1,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:2,
    },{
      title:"big chillin",
      amt:59,
      members:[{name:"Jackswift"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:3,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:2,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:3,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:1,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:1,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:3,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:2,
    },{
      title:"advanced",
      amt:59,
      members:[{name:"Jackswift"},{name:"AshBeeee"}],
      duration:"6 hrs, 5 min",
      views:1112,
      comments:56,
      img:3,
    },
  ];
  ads = [
    {
      header:"I am an ad, please accidentally click me.",
      content:"Fames ac turpis egestas integer. Viverra orci sagittis eu volutpat odio. "
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