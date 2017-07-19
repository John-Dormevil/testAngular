import { Component, OnInit } from '@angular/core';

import { HeroService } from './service/hero.service';
import { Hero } from './model/Hero';

@Component({
    selector: 'app-hero',
    templateUrl: './view/hero.component.html',
    styleUrls: ['./css/hero.component.css']
})
export class HeroComponent implements OnInit {
    private heroes: Hero[];
    private selectedHero: Hero;
    private newHero: Hero;

    public constructor(private heroService: HeroService) {
        this.newHero = new Hero(0, '');
    }

    ngOnInit(): void {
        this.heroService.getHeroesSlowly().then(heroes => { this.heroes = heroes });
    }
    public addHero(hero: Hero): void {
        this.heroes.push(this.newHero);
        this.newHero = new Hero(0, '');
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

