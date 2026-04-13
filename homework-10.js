class Hero {
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

class Mage extends Hero {
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
const gandalf = new Mage("Гэндальф", 3, 10);
gandalf.takeDamage()
gandalf.checkDeath()