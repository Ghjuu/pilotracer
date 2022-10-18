import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-races',
  //templateUrl: './races.component.html',
  styleUrls: ['./races.component.css'],
  template:`
  <div *ngIf="races.length > 0">
  <h3>Races</h3>
  <ul>
    <li *ngFor="let race of races">{{ race.name }}</li>
  </ul>
</div> `
})
export class RacesComponent implements OnInit {
  public races = [{ name: 'GP Espagne' },{ name: 'GP Canada' }];
 

  refreshRaces(): void {
      this.races; 
  }
  

  ngOnInit(): void {
   
  }

}

