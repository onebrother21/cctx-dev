import { AfterViewInit,Component,ElementRef,Input,OnInit,ViewChild,ViewEncapsulation } from '@angular/core';
import { CCTXDevIcon } from '../../types';

@Component({
  selector: 'cctx-dev-icon',
  templateUrl: './cctx-dev-icon.component.html',
  styleUrls: ['./cctx-dev-icon.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevIconComponent {
  title = "cctx-dev-icon";
  @Input() item:CCTXDevIcon = {html:"",label:""};
  /*
  @Input() set item(item:CCTXDevIcon){
    item && item.html?this.loadData(item.html):null;
  };
  /*
  @ViewChild('iconhtml') iconhtml:ElementRef = {} as ElementRef;
  //ngAfterViewInit(){console.info(this.iconhtml);}
  loadData(data:string){
    console.info(data);
    if(this.iconhtml.nativeElement) this.iconhtml.nativeElement.innerHTML = data;
  }
  */
}
