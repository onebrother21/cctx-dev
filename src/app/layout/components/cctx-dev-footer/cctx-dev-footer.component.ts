import { Component,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'cctx-dev-footer',
  templateUrl: './cctx-dev-footer.component.html',
  styleUrls: ['./cctx-dev-footer.component.scss'],
  //encapsulation:ViewEncapsulation.None
})
export class CCTXDevFooterComponent {
  title = "cctx-dev-footer";
  footer = {
    text:
    "Sample text. Click to select the text box. "+
    "Click again or double click to start editing the text."
  };
}
