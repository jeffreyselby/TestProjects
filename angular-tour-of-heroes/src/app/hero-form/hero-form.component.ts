import { Component } from '@angular/core';

import { HeroService } from '../hero.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-hero-form', 
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css'
})
export class HeroFormComponent {

  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model: Hero = new Hero('Dr. IQ2', this.powers[0], 'Chuck Overstreet');

  
  submitted = false;

  constructor (private heroService: HeroService){
    
  }

  onSubmit() { 
    this.submitted = true;
    
    //this.model.id = null;

    const hero: Hero = this.model as Hero;

    hero.id = undefined;

    this.heroService.addHero(this.model as Hero).subscribe(hero => {  });
  
  }

  newHero() {
    //this.model = new Hero(, '', '');
  }
}
