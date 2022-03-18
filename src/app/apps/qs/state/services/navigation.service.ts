import { Injectable } from "@angular/core";
import { SerializedRouterStateSnapshot } from "@ngrx/router-store";
import { Router,ActivationEnd } from "@angular/router";
import { filter,withLatestFrom,tap } from "rxjs/operators";
import { Store } from "@ngrx/store";
import { AppState,AppRoute,route$ } from "@state";

@Injectable({providedIn:"root"})
export class QS_NavigationService {
  constructor(private router:Router,private app:Store<AppState>){/* this.listenToRouter(); */}
  listenToRouter(){
    this.router.events.pipe(
      filter(event => event instanceof ActivationEnd),
      withLatestFrom(this.app.select(route$)),
      tap(([event,route]) => {console.log("before resolve",route.url);}));}
  getRequestedRoute(event:any,state:SerializedRouterStateSnapshot):AppRoute {
    return {
      url:event.url,
      params:(state.root && state.root.params) || undefined,
      data:(state.root && state.root.data) || undefined,
      query:(state.root && state.root.queryParams) || undefined,};}
  get404Navigation(url:string){
    return {
      url:`/${url.split("/")[0]}/error`,
      queryParams:{url:url.split("/").slice(1).join("/")}};}
  getPageTitle(url:string){
    const agent = /agent/.test(url);
    const parts = url.split("/"),s = parts[parts.length - 1];
    switch(s){
      case "nitch":return "Home";
      case "about":return "About Us";
      case "faq":return "FaQs";
      case "timeline":return "Timeline";
      case "queue":return "Task Queue";
      case "appts":return "My Appointments";
      case "chat":return "Service Chat";
      case "video-chat":return "Service Video Chat";
      case "leaderboard":return "Leaderboard";
      case "blog":return "Blog";
      case "portfolio":return "Portfolio";
      case "ecommerce":return "E-Commerce";
      case "ecommerce-single":return "E-Commerce Single";
      case "ecommerce-cart":return "E-Commerce Cart";
      case "gallery":return "Gallery";
      case "search":return "Search Results";
      case "services":return "Our Services";
      case "team":return "Our Team";
      case "team-member":return "Our Team Member";
      case "single":return "Misc Page";
      default:return "";
    }
  }
}
/*
case "appts":return "Appointments";
case "commissions":return "Commissions";
case "queue":return "Task Queue";
case "chat":return "Service Chat";
case "video-chat":return "Service Video Chat";

case "services":return "Our Services";
case "forms":return "Forms";
case "links":return "Links";
case "webinars":return "Webinars";
case "announcements":return "Announcements";
case "tutorials":return "Tutorials";

case "file-single":return "File Single";
case "blog-single":return "Blog Details";
case "email":return "Email Template";
case "coming":return "Coming Soon";

case "signin":return "Sign In";
case "signup":return "Sign Up";
case "verify":return "Verify Email";
case "complete-acct":return "Complete Account";
case "forgot":return "Forgot Username/Pin";
case "reset":return "Reset Pin";
*/