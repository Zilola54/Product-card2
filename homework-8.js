import { productCards } from "./product-cards.js";

//Задание 2 и 3

const productTemplate = document.getElementById('product-template');
const productsList = document.querySelector('.products-list');

console.log(productsList);

//Задание 4 Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const listOfCards = productCards.reduce((acc, card) => {
  acc.push({[card.title]: card.description});

  return acc;

}, []);

console.log(listOfCards);

const sumOfCard = productCards.reduce((acc, card) => {
  return card.skinType === "для нормальной кожи"? acc + 1 : acc;
}, 0); 

console.log(sumOfCard);

//Задание 5 Реализовать функцию, которая при старте страницы выводит сообщение (через функцию prompt) "Сколько карточек отобразить? От 1 до 5" и в зависимости от результата - будет выводить введенное количество. Должна быть защита от ввода других значений (проверка if). То-есть: у нас будет 2 функции, одна возвращает количество карточек, которое нужно ввести, другая - рендерить эти карточки (принимая массив аргументом)

function getCardsCount() {
  const quantity = prompt("Сколько карточек отобразить? От 1 до 5", "5");
  const count = Number(quantity);

  if (isNaN(count) || count < 1 || count > 5) {
    alert("Ошибка! Пожалуйста, введите число от 1 до 5.");
    return 0;
  }
  return count;
}

function renderCards(cardsArray) {

  productsList.replaceChildren();

  cardsArray.forEach(card => {
    const cardClone = productTemplate.content.cloneNode(true);

    cardClone.querySelector('.product-title').textContent = card.title;
    cardClone.querySelector('.product-image').src = `./image/${card.image}.png`;
    cardClone.querySelector('.product-skin-type').textContent = card.skinType;
    cardClone.querySelector('.product-description').textContent = card.description;
    cardClone.querySelector('.price').textContent = `${card.price} ₽`;
    
    const listContainer = cardClone.querySelector('.product-compount');
    listContainer.textContent = ''; 
    
    card.compount.components.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      listContainer.append(li);
    });

    productsList.append(cardClone);
  });
}

const count = getCardsCount();

if (count > 0) {
  const selectedCards = productCards.slice(0, count);
  renderCards(selectedCards);
}