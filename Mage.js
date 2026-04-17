import { Hero } from "./Hero.js"; 

export class Mage extends Hero {
  constructor(name, hearts, mana) {
    super(name, hearts);
    this.mana = 10;
  }
  takeDamage() {
    this.heart -= 0.5;
    console.log(`Маг "${this.name}" защищается магией! Осталось жизней: ${this.heart}`);
  }
  castSpell() {
    console.log(`Маг "${this.name}" колдует! Осталось маны: "${this.mana -= 1}".`)
  }
}