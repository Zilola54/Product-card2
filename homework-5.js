
//Функция, показывающая город и температуру
function weather(city, temperature) {
  console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`)
}
weather('Екатеринбурге', -25)

//Функция, опеределяющая скорость света
let LIGHT_SPEED = 299792458;

if (LIGHT_SPEED > 299792458) {
  console.log("superLuminal");
} else if (LIGHT_SPEED === 299792458) {
  console.log("lightSpeed");
} else (LIGHT_SPEED < 299792458); {
  console.log("subLuminal");
}
console.log(LIGHT_SPEED)

//Функция, помогающая подсчитать нужное кол-во денег для покупки яблок
function buyProduct(product, price, budget) {
  let difference = price - budget;

  if (budget >= price) {
    console.log(`${product} приобретёно. Спасибо за покупку!`);
} else {
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct ("Груша", 8, 5)

//Доп.задания
function buyProperty (property , myBudget) {

  if (myBudget <= property) {
    let diff = property - myBudget;
    console.log(`не хватает ${diff}`)
  } else if (myBudget >= property) {
    let change = myBudget - property;
    console.log(`при покупке дома останется ${change}`);
  }
}
buyProperty(1000, 5000)

let city = "Moscow";
const myAge = 30;
let animal = "dog";

