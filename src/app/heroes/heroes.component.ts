import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService){

  }
heroes:Hero[]=[];
selectHero?:Hero;
onSelect(hero:Hero):void {
this.selectHero = hero;
}
getHeroes():void{
  this.heroes = this.heroService.getHeroes();
}
ngOnInit():void{
  this.getHeroes();
}
}
