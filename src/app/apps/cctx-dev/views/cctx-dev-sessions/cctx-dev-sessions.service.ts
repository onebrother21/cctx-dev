import { Injectable } from "@angular/core";
import { AppService } from "@state";
import {
  CCTXDevMediaSession,
  CCTXDevMediaSessionComment,
  ContactUsActions as ContactUs,ContactUsMsg,contactUsMsg$,
  NavigationActions as Navigation,
} from "@cctx-state";
import { Observable, Subject } from "rxjs";

@Injectable()
export class CCTXDevSessionsService {
  contactUsMsg:Observable<ContactUsMsg|null> = new Observable();
  items:CCTXDevMediaSession[] = [
    {id:"01",title:"Creamy Crack",lastUpd:"3/11/22 3:00pm",members:[{name:"Jackswift"},{name:"BreezeAwesome"},{name:"ThatGirlNikki"}]},
    {id:"02",title:"Project Anywhr",lastUpd:"3/11/22 3:00pm",members:[{name:"Jackswift"}]},
    {id:"03",title:"Superfye!",lastUpd:"3/10/22 11:00pm",members:[{name:"Jackswift"}]},
    {id:"04",title:"Pandora Bound",lastUpd:"3/9/22 5:45pm",members:[{name:"Jackswift"}]},
  ];
  private newComment = new Subject<CCTXDevMediaSessionComment>();
  newComment$ = this.newComment.asObservable();
  msgs:string[] = [
    "Ten random sentences",
    "Um, water the plant",
    "I'm glad it's getting warmer",
    "I'm cleaning my room",
    "I'm making my bed",
    "Think of something that's something you're doing",
    "Let me fluff my pillows",
    "I like having a phone",
    "I dont know yet",
    "The heater is blowing hot air",
    "And so are u",
  ];
  authors:string[] = [
    "Mia","Jack","Terry","Sussie","BreezeAwesome",
    "DavidDavidDavid","Brenda","Felicia","Linda","Leticia",
    "Dawn","Arnez","Yolanda","Wanda"
  ];
  constructor(private app:AppService){this.contactUsMsg = this.app.select(contactUsMsg$);}
  send(o:CCTXDevMediaSessionComment){
    this.newComment.next(o);
    //this.app.do(Navigation.go(o));
  }
  randomIntFromInterval(min:number,max:number){return Math.floor(Math.random() * (max - min + 1) + min);}
  addRandomComment(){
    const times = [500,1000,2000,3000,4000,5000];
    const rndMsg = this.randomIntFromInterval(0,this.msgs.length - 1);
    const rndAuthor = this.randomIntFromInterval(0,this.authors.length - 1);
    const rndTime = this.randomIntFromInterval(0,times.length - 1);
    const comment = {user:this.authors[rndAuthor],body:this.msgs[rndMsg]};
    const delay = times[rndTime];
    this.newComment.next(comment as CCTXDevMediaSessionComment);
    setTimeout(() => this.addRandomComment(),delay);
  }
}