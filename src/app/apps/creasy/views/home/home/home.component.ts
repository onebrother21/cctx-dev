import { Component } from '@angular/core';

@Component({
  selector: 'creasy-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class Creasy_HomeComponent {
  title = "creasy-home";
  greeting = "Creasy has got your back!";
  oneliner = "New things happening inside...";
}
