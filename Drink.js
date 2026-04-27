export class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature
  }
  getDrinkInfo() {
    console.log(this.name, this.size, this.price, this.#temperature)
  }
  //геттер для узнавания приватного параметра
  getDrinkTemperature() {
    return(this.#temperature)
  }
  //сеттер для изменения приватного параметра
  setDrinkTemperature(newTemp) {
    this.#temperature = newTemp
  }
  #prepareDrink() {
  console.log(`Нагреваем ${this.name} до ${this.getDrinkTemperature()} градусов`)
  }
  serveDrink(){
    this.#prepareDrink(); 
    console.log("Ваш напиток готов! Приятного аппетита")
  }
  prepare() {
  this.serveDrink()
  }
}

