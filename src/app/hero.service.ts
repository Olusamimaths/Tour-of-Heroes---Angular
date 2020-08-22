import { Injectable } from '@angular/core';
import { Hero } from './heroes/hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    // send a message when heroes are fetched
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES); // returns an Observable<Hero[]> that emits a single value, the array of mock heroes
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add('HeroService: fetched hero with id');
    return of(HEROES.find((hero) => hero.id === id));
  }
}
