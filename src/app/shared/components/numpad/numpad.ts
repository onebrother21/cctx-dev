import { Component,Output,EventEmitter,Input } from "@angular/core";
import { Observable } from "rxjs";
//import { AppService,copy$ } from "@state";

@Component({
  selector:"numpad",
  templateUrl: "./numpad.html",
  styleUrls:["numpad.scss"]
})

export class NumberPadComponent {
  @Output() num = new EventEmitter<string>();
  @Input() config = {masked:false,minlength:4,maxlength:4};
  val = "";
  mask = "";
  nums = [1,2,3,4,5,6,7,8,9,"Clear",0,"OK"];
  updateVal(n:string|number){
    switch(true){
      case n == "Clear":this.val = this.val.substr(0,this.val.length - 1);break;
      case typeof n == "number":this.val = this.val + n.toString();break;
      default:return;}
    this.mask = this.val.split("").map(s => "*").join("");
    if(this.checkVal()) this.submit();}
  checkVal(){
    switch(true){
      case this.val.length < this.config.minlength:return false;
      case this.val.length > this.config.maxlength:return false;
      default:return true;}}
  submit(){
    this.num.emit(this.val);
    this.val = "";
    this.mask = "";}
}