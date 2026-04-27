import { Drink } from './Drink.js'
export class Tea extends Drink {
  constructor(name, size, price, temperature, withLemon, withSugar, withIce) {
  super(name, size, price, temperature);
  this.withLemon = withLemon;
  this.withSugar = withSugar;
  this.withIce = withIce
  }
  addLemon() {
    console.log("Добавлен лимон")
  }
  addSugar() {
console.log("Добавлен сахар")
  }
  addIce() {
console.log("Добавлен лёд")
  }
  prepare() {
  this.addLemon();
  this.addSugar();
  this.addIce();
  this.serveDrink(); 
  }
}
