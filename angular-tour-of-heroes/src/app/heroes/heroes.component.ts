import { Component } from '@angular/core';
import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',   
  templateUrl: './heroes.component.html',
  styleUrl: './heroes.component.scss'
})
export class HeroesComponent {

  heroes: Hero[] = [];
  
  constructor (private heroService: HeroService){

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    //this.heroes = this.heroService.getHeroes();

    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);

  }

  add(name: string): void {
    name = name.trim();

    if (!name) { return; }

    this.heroService.addHero({name} as Hero).subscribe(hero => { this.heroes.push(hero) });

  }

  delete(hero: Hero): void {

    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id as number).subscribe();

  }
}
