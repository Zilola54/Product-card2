export class Hero {
  constructor(name, hearts) {
    this.name = name;
    this.heart = hearts;
  }
  takeDamage() {
    console.log(`У вас осталось "${this.heart -= 1}" жизней!`);
  }
  checkDeath() {
    if (this.heart <= 0)
    console.log(`Герой "${this.name}" пал в бою!`)
  }
}