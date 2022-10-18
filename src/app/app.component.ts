import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<app-menu></app-menu><h1>PilotRacer<h1><app-races></app-races>',

})
export class AppComponent {
  title = 'pilotracer';
  numberOfUsers = 146;
}
