import { Injectable } from '@angular/core';

import { Hero } from '../model/Hero';
import { HEROES } from '../mock-data/mock-heroes';

@Injectable()
export class HeroService {
    public getHerores(): Hero[] {
        return HEROES;
    }
    public getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => { resolve(this.getHerores()) } , 3500);
        });
    }
}
