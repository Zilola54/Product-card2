import { Drink } from './Drink.js'
export class Coffee extends Drink {
  constructor(name, size, price, temperature, beanType, grindSize, milkType, sweetenerType) {
  super(name, size, price, temperature);
  this.grindSize = grindSize;
  this.beanType = beanType;
  this.milkType = milkType;
  this.sweetenerType = sweetenerType
  }
  grindBeans() {
    console.log("Зерна измельчены")
  }
  addMilk() {
    console.log("Молоко добалено")
  }
  addSweetener() {
    console.log("Добавлен подсластитель")
  }
  prepare() {
  this.grindBeans();
  this.addSweetener();
  this.addMilk();
  this.serveDrink(); 
  }

}
