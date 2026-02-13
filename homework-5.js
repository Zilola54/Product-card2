
//Функция, показывающая город и температуру
function weather(Y,X) {
  console.log(`Сейчас в ${Y} температура  — ${X} градусов по Цельсию`)
}
weather('Екатеринбурге', -25)

//Функция, опеределяющая скорость света
let lightSpeed = 299792458;

if (lightSpeed > 299792458) {
  console.log("superLuminal");
} else if (lightSpeed === 299792458) {
  console.log("lightSpeed");
} else (lightSpeed < 299792458); {
  console.log("subLuminal");
}
console.log(lightSpeed)

//Функция, помогающая подсчитать нужное кол-во денег для покупки яблок
let product = "яблоко";
let productPrice = 6;
let myMoney = 6;

let difference = productPrice - myMoney;

if (myMoney >= productPrice) {
  console.log(`${product} приобретёно. Спасибо за покупку!`);
} else {
  console.log(`Вам не хватает ${difference}$, пополните баланс`);
}

//Доп.задания
function buyHouse (house, myMone) {

  if (myMone <= house) {
    let diff = house - myMone;
    console.log(`не хватает ${diff}`)
  } else if (myMone >= house) {
    let change = myMone - house;
    console.log(`при покупке дома останется ${change}`);
  }
}
buyHouse(1000, 500)

let city = "Moscow";
const myAge = 30;
let animal = "dog";

