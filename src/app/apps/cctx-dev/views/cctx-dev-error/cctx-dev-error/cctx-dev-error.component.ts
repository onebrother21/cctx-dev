import { Component } from '@angular/core';

@Component({
  selector: 'cctx-dev-error',
  templateUrl: './cctx-dev-error.component.html',
  styleUrls: ['./cctx-dev-error.component.scss'],
})
export class CCTXDevErrorComponent {
  title = "cctx-dev-error";
  errors = {
    notFound:"Looks like you're a bit lost...click here to go back",
    server:"Looks like you're a bit lost...click here to go back",
  };
}
