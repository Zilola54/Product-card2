import "./product-cards.js";
import "./homework-10.js";
import "./homework-9.js";
import "./homework-8.js";
import "./homework-7.js";
import "./homework-6.js";
import "./homework-5.js";
import "./script.js";
import "./comments.js";
import Modal from "./Modal.js";
import Form from './Form.js'

const registrationModal = new Modal('modalOverlay');
const registrationForm = new Form('reg-form');

let user;

const openBtn = document.querySelector('.open-btn');

if (openBtn) {
  openBtn.onclick = () => {
    registrationModal.open();
  };
}

registrationForm.formElement.addEventListener('submit', (event) => {
  event.preventDefault();

    if (!registrationForm.isValid()) {
    alert('Форма заполнена неверно!');
    return;
  }

  const values = registrationForm.getValues();

  if (values.password !== values.confirmPassword) {
    alert('Пароли не совпадают!');
    return;
  }

  const { confirmPassword, ...userData } = values;
  userData.password = '*'.repeat(userData.password.length);
  userData.createdOn = new Date();

  registrationModal.close();
  registrationForm.reset();

  user = userData;
  console.log(user);
  alert('Успешная регистрация!');
});