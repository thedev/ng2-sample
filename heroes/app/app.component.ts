import {Component from 'angular2/core'};

@Component({
  selector: 'my-app',
  styles:[`
    .heroes {list-style-type: none; margin-left: 1em; padding: 0; width: 10em;}
    .heroes li { cursor: pointer; position: relative; left: 0; transition: all 0.2s ease; }
    .heroes li:hover {color: #369; background-color: #EEE; left: .2em;}
    .heroes .badge {
      font-size: small;
      color: white;
      padding: 0.1em 0.7em;
      background-color: #369;
      line-height: 1em;
      position: relative;
      left: -1px;
      top: -1px;
    }
    .selected { background-color: #EEE; color: #369; }
  `],
  template: `<h1>{{title}}</h1>
             <h2>My heroes</h2>
             <ul class="heroes">
                <li *ngFor="#hero of heroes"
                    [class.selected]="hero === selectedHero"
                    (click)="onSelect(hero)">
                <li *ngFor="#hero of heroes"
        [class.selected]="hero === selectedHero"
        (click)="onSelect(hero)">
                 <span class="badge">{{hero.id}}</span> {{hero.name}}
               </li>
             </ul>
             <div *ngIf="selectedHero">
               <h2>{{selectedHero.name}} details!</h2>
               <div><label>id: </label>{{selectedHero.id}}</div>
               <div>
                  <label>name: </label>
                  <div><input [(ngModel)]="selectedHero.name" placeholder="name"></div>
               </div>
             </div>`
})

export class AppComponent {
  public title = 'Tour of Heroes';
  public heroes = HEROES;
  public selectedHero: Hero;
  onSelect(hero: Hero) { this.selectedHero = hero; }
}

interface Hero {
  id: number;
  name: string;
}

var HEROES[] = [
  {"id": 11, "name": "Mr. Nice" },
  {"id": 12, "name": "Narco" },
  {"id": 13, "name": "Bombasto" }
];
