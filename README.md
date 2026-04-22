class Person {
  constructor(name, age, hairColor, height, weight, eyesColor) {
    this.name = name;
    this.age = age;
    this.hairColor = hairColor;
    this.height = height;
    this.weight = weight;
    this.eyesColor = eyesColor
  }

  showInfo() {
    console.log(this.name, this.agethis, this.hairColorthis, this.heightthis, this.weightthis, this.eyesColor)
  }

  getName() {
    return this.name;
  }

   getAge() {
    return this.age;
  }

}

class Man extends Person {
  constructor(name, age, hairColor, height, weight, eyesColor, beardColor) {
    super(name, age, hairColor, height, weight, eyesColor);
    this.beardColor = beardColor;
  }
  getBeardColor() {
    return this.beardColor;
  }
}

class Women extends Person {
  constructor(name, age, hairColor, height, weight, eyesColor, nailsColors) {
    super(name, age, hairColor, height, weight, eyesColor);
    this.nailsColors = nailsColors;
  }
  getNailsColorr() {
    return this.nailsColors;
  }
}