
//Функция, показывающая город и температуру
function weather(city, temperature) {
  console.log(`Сейчас в ${city} температура  — ${temperature} градусов по Цельсию`)
}
weather('Екатеринбурге', -25);

//Функция, опеределяющая скорость света
function checkSpeed(speed) {
  const LIGHT_SPEED = 299792458;

  if (speed > LIGHT_SPEED) {
    console.log("superLuminal");
  } else if (speed === 299792458) {
    console.log("LIGHT_SPEED");
  } else {
    console.log("subLuminal");
  }
}
checkSpeed(298792458);

//Функция, помогающая подсчитать нужное кол-во денег для покупки яблок
function buyProduct(product, price, budget) {
  let difference = price - budget;

  if (budget >= price) {
    console.log(`${product} приобретёно. Спасибо за покупку!`);
} else {
    console.log(`Вам не хватает ${difference}$, пополните баланс`);
  }
}
buyProduct ("Груша", 8, 5);

//Доп. задания
function buyProperty (property , myBudget) {

  if (myBudget < property) {
    let difference = property - myBudget;
    console.log(`Не хватает ${difference}`);
  } else {
    let change = myBudget - property;
    console.log(`при покупке дома останется ${change}`);
  }
}
buyProperty(1000, 9000);

let city = "Moscow";
const myAge = 30;
let animal = "dog";

