import { Component } from '@angular/core';
import { Hero } from './hero';
import { Heroes } from '../mock-heros';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {

heroes = Heroes;
selectHero?:Hero;
onSelect(hero:Hero):void {
this.selectHero = hero;
}
}
