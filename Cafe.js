
export class Cafe {
  constructor(title, location) {
  this.title = title;
  this.location = location
  }
  getCafeInfo() {
    console.log(this.title, this.location)
  }
  orderDrink(drink) {
    drink.prepare()
  }
}