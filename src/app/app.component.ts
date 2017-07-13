import { Component } from '@angular/core';
import { Hero } from './model/Hero';

@Component({
  selector: 'app-root',
  templateUrl: './view/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent {
  private title: string;
  private heroes: Hero[];
  private selectedHero: Hero;
  private newHero: Hero;

  public constructor() {
    this.title = 'Tour of Heroes';
    this.newHero = new Hero(0, '');
    this.heroes = [
      new Hero(1, 'Electra'),
      new Hero(2, 'StromSpirit')
    ];
  }

  public getTitle(): string {
    return this.title;
  }
  public addHero(hero: Hero): void {
    this.heroes.push(this.newHero);
  }
  public getHeroes(): Hero[] {
    return this.heroes;
  }
  public setName(index: number, name: string): void {
    this.heroes[index].setName(name);
  }
  public onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  public getSelectedHero(): Hero {
    return this.selectedHero;
  }
  public getNewHero(): Hero {
    return this.newHero;
  }
}
