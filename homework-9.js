import { productCards } from "./product-cards.js";

//задание 3

const productsList = document.querySelector('.products-list');
const productTemplate = document.querySelector('#product-template');

function renderCards(cardsArray) {

  productsList.replaceChildren();

  cardsArray.forEach(card => {
    const cardClone = productTemplate.content.cloneNode(true);

    cardClone.querySelector('.product-title').textContent = card.title;
    cardClone.querySelector('.product-image').src = `./image/${card.image}.png`;
    cardClone.querySelector('.product-skin-type').textContent = card.skinType;
    cardClone.querySelector('.product-description').textContent = card.description;
    cardClone.querySelector('.price').textContent = `${card.price} ₽`;
    
    const listContainer = cardClone.querySelector('.product-compound');
    listContainer.textContent = ''; 
    
    card.compound.forEach(text => {
      const li = document.createElement('li');
      li.textContent = text;
      listContainer.append(li);
    });

    productsList.append(cardClone);
  });
}

function getCardsCount() {
  const total = 5;
  if (total > 0) {
    renderCards(productCards.slice(0, total));
  }
 return total;
};

const count = getCardsCount(); 

//задание 4
const subscribeForm = document.querySelector('#subscribe-form')
subscribeForm.addEventListener('submit',(event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form)
  const data = Object.fromEntries(formData.entries());
  console.log(data);
})

//уровень 2 задание 6 создано модальное окно

const overlay = document.querySelector('.overlay');
const btnOpen = document.querySelector('.open-btn');

const cross = document.querySelector('.close-cross');
const btnCancel = document.querySelector('#cancel-btn')

const closeModal = () => {
  overlay.classList.remove('modal-showed');
};

btnOpen.onclick = () => {
  overlay.classList.add('modal-showed');
};
cross.onclick = closeModal;
btnCancel.onclick = closeModal;

overlay.onclick = (e) => {
  if (e.target === overlay) closeModal();
};

//Добавлена дата создания 

let user;
const regForm = document.querySelector('#reg-form');

regForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(regForm);
  const values = Object.fromEntries(formData.entries());

  if (values.password !== values.confirmPassword) {
    alert('Пароли не совпадают! Попробуйте еще раз.');
    return;
  }

  const { confirmPassword, ...userData } = values;

  userData.password = '*'.repeat(userData.password.length);
  userData.createdOn = new Date();

  alert('Регистрация прошла успешно!');
  closeModal();

  user = userData;
  console.log(user);
});





