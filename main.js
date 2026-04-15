import { Mage } from "./Mage.js";
import "./homework-9.js";
import Modal from "./Modal.js";
import Form from './Form.js'
//Модальное окно и форма через классы
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
//Реализована наследуемость классов
const gandalf = new Mage("Гэндальф", 3, 10);
gandalf.takeDamage()
gandalf.checkDeath()