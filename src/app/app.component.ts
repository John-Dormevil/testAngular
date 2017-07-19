import { Component, OnInit } from '@angular/core';

import { Hero } from './model/Hero';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './view/app.component.html',
  styleUrls: ['./css/app.component.css']
})
export class AppComponent implements OnInit {
  private title: string;
  private heroes: Hero[];
  private selectedHero: Hero;
  private newHero: Hero;

  public constructor(private heroService: HeroService) {
    this.title = 'Tour of Heroes';
    this.newHero = new Hero(0, '');
  }


  ngOnInit(): void {
    this.heroService.getHeroesSlowly().then(heroes => { this.heroes = heroes});
  }
  public getTitle(): string {
    return this.title;
  }
  public addHero(hero: Hero): void {
    this.heroes.push(this.newHero);
    this.newHero = new Hero (0, '');
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
