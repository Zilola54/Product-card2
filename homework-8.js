import { productCards } from "./product-cards.js";

//Задание 2 и 3

const productTemplate = document.getElementById('product-template');
const productsList = document.querySelector('.products-list');

productCards.forEach(card => {
  const cardClone = productTemplate.content.cloneNode(true);

  const listContainer = cardClone.querySelector('.product-compount');
  listContainer.textContent = ''; 

  card.compount.components.forEach(text => {
    const li = document.createElement('li');
    li.textContent = text;
    listContainer.append(li);
  });

  cardClone.querySelector('.product-image').src =`./image/${card.img}`;
  cardClone.querySelector('.product-type-skin').textContent = card.typeSkin;
  cardClone.querySelector('.product-title').textContent = card.title;
  cardClone.querySelector('.product-descr').textContent = card.descr;
  cardClone.querySelector('.price-value').textContent = card.price.value;

  productsList.appendChild(cardClone);

});

console.log(productsList);

//Задание 4 Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание

const listOfCards = productCards.reduce((acc, card) => {
  acc.push({[card.title]: card.descr});

  return acc;

}, []);

console.log(listOfCards);

const sumOfCard = productCards.reduce((acc, card) => {
  return card.typeSkin === "для нормальной кожи"? acc + 1 : acc;
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
    cardClone.querySelector('.product-image').src = `./image/${card.img}`;
    cardClone.querySelector('.product-type-skin').textContent = card.typeSkin;
    cardClone.querySelector('.product-descr').textContent = card.descr;
    cardClone.querySelector('.price-value').textContent = card.price.value;
    
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