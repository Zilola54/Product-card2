///смена цвета фона первой карточки
const firstCatalogCard = document.querySelector('.product-card');
const recolorFirstCardButton = document.getElementById('recolor-first-card-button');

const blueHashColor = '#2b49f5';

recolorFirstCardButton.addEventListener('click', () => {
  firstCatalogCard.style.backgroundColor = blueHashColor;
});

///смена цвета фона всех карточек
const catalogCards = document.querySelectorAll('.product-card');
const recolorAllCardButton = document.getElementById('recolor-all-card-button');

const greenHashColor = "#11e74a"

recolorAllCardButton.addEventListener('click', () => {
  catalogCards.forEach(
    card => card.style.backgroundColor = greenHashColor
  );
});

///команда на открытие сайта Google
const openGoogleButton = document.getElementById('open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const ansver = confirm('Вы действительно хотите перейти на сайт Google?');

  if (ansver) {
    window.open('http://google.com');
  } else {
    console.log('Пользователь отменил переход на Google');
  }
}

///в консоли появляется название заголовка, который указала по тегу в скобках, переменная title
const title = document.querySelector('.product-selection_title');
title.addEventListener('mouseover', () => {
  console.log(title.textContent);
});

///отдельная смена фона последней карточки на два цвета, нажатием на кнопку
const recolorLastCard = document.getElementById('recolor-last-card-button');
const recolorLastCatalogCard = document.querySelector('.product-card:last-child');

recolorLastCard.addEventListener('click', () => {
  recolorLastCatalogCard.classList.toggle('is-purple');
});