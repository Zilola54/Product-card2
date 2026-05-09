const loading = document.querySelector('.loading');
const allElements = document.querySelector('.all-elements');
const usersCardTemplate = document.getElementById('users-template');
const usersList = document.querySelector('.users-list');

const deleteLastCardButton = document.getElementById('delete-last-card');
const deleteEveryoneButton = document.getElementById('delete-everyone-card');
const getCard = document.getElementById('get-card')

deleteEveryoneButton.addEventListener('click', () => {
  usersList.replaceChildren();
  const deleteKey = localStorage.removeItem('users');
  console.log(deleteKey);
  loading.classList.remove('hidden');
  allElements.classList.add('hidden');
});

deleteLastCardButton.addEventListener('click',() => {
  const rawData = localStorage.getItem('users');

  if (rawData) {
    const usersArray = JSON.parse(rawData);
    usersArray.pop();
    localStorage.setItem('users', JSON.stringify(usersArray));
    renderUsers(usersArray);
  }
});

getCard.addEventListener('click', () => {
  const rawData = localStorage.getItem('users');
  const currentUsers = rawData ? JSON.parse(rawData) : [];

  if (currentUsers.length === 5) {
    alert("Все пользователи уже загружены!")
    return;
  } 

  loading.classList.remove('hidden');
  allElements.classList.add('hidden');

  getUsers().then(result => {
    localStorage.setItem('users', JSON.stringify(result));

    loading.classList.add('hidden');
    allElements.classList.remove('hidden');
    renderUsers(result)
   })
   .catch(error =>{
      loading.classList.add('hidden')
      alert(error.message)
   }) 
});

function deleteCardById(userIdQuery) {
  const rawData = localStorage.getItem('users');
  if (rawData) {
    const userArray = JSON.parse(rawData);
    const filteredArray = userArray.filter(user => user.id !== userIdQuery);
    localStorage.setItem('users', JSON.stringify(filteredArray));
    renderUsers(filteredArray);
  }
}

const myData = localStorage.getItem('users');

  if (!myData) {

    console.log("Начинаем загрузку...")
    setTimeout(() => {
      getUsers()
      .then(result => {
          localStorage.setItem('users',JSON.stringify(result));

          loading.classList.add('hidden');
          allElements.classList.remove('hidden');
          renderUsers(result);
      });
    }, 1000); 
    
  } else {
    loading.classList.add('hidden');
    allElements.classList.remove('hidden');
    const usersArray = JSON.parse(myData);
    renderUsers(usersArray);
  }

async function getUsers() {
  const users = await fetch('./users.json');

  if (!users.ok) {
    throw new Error("Ошибка при загрузке данных")
   }

  const data = await users.json();
  return data ;
}


function renderUsers(users) {
  console.log('Готовы к отрисовке:', users);
  usersList.replaceChildren();

  users.forEach(user => {
    const cardClone = usersCardTemplate.content.cloneNode(true);

    cardClone.querySelector('.user-id').textContent = user.id;
    cardClone.querySelector('.user-name').textContent = user.name;
    cardClone.querySelector('.user-surname').textContent = user.surname;
    cardClone.querySelector('.user-email').textContent = user.email;
    cardClone.querySelector('.user-age').textContent = user.age;

    const deleteSelectedCard = cardClone.querySelector('.delete-selected-card')

    deleteSelectedCard.addEventListener('click', () => {
      deleteCardById(user.id);
    });

    usersList.append(cardClone);
      });

  }