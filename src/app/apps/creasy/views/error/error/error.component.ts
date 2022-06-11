import { Component } from '@angular/core';

@Component({
  selector: 'creasy-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class Creasy_ErrorComponent {
  title = "creasy-error";
  errors = {
    notFound:"Looks like you're a bit lost...click here to go back",
    server:"Looks like you're a bit lost...click here to go back",
  };
}
