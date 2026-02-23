
//задание 3
const user = {
  name: "Зилола",
  surname: "Олимова",
  age: 30,
  city: "Екатеринбург",
  country: "Россия",
  maritalStatus: "замужем",
  email: "olimova03_95@mail.ru",
}

console.log(user.name);
console.log(user);

//задание 4
const auto = {
  make: "Honda",
  model: "insight",
  modelYear: 2019,
  color: "white",
  transmission: "automatic"
}

const updatedAuto = {...auto, owner: "user" };
console.log(updatedAuto);

//задание 5
function addMaxSpeed(obj) {
  if (obj.maxSpeed){
    return;
  }
  obj.maxSpeed = 400;
}
addMaxSpeed(auto)
console.log(auto)

//задание 6
function getPropertyValue(user, age) {
  console.log(user[age])
}
getPropertyValue(user, "age");

//Задание 7
const products = ['Сыр', 'Хлеб', 'Сметан', 'Молоко', 'Яблоко'];

console.log(products)
console.log(products[0])

//Задание 8
const horrorMovies = [
  {
    title: "Обитель зла",
    director: "Пол Андерсон",
    year: 2002,
    genre: "Ужасы"
  },
  {
    title: "Обитель зла 2: Апокалипсис",
    director: "Александр Уитт",
    year: 2004,
    genre: "Боевик"
  },
  {
    title: "Обитель зла 3: Вымирание",
    director: "Рассел Малкэхи",
    year: 2007,
    genre: "Постапокалипсис"
  }
]
console.log(horrorMovies[1].year);

horrorMovies.push({
  title: "Обитель зла 4: Жизнь после смерти",
  director: "Пол Андерсон",
  year: 2010,
  genre: "Боевик"
});
console.log(horrorMovies.length);

// задание 9
const universeIronMan = [
  {
    title: "Железный человек",
    year: 2008,
    director: "Джон Фавро"
  },
  {
    title: "Железный человек 2",
    year: 2010,
    director: "Джон Фаво"
  },
  {
    title: "Железный человек 3",
    year: 2013,
    director: "Шейн Блэк"
  }
]
const myCollection = [...horrorMovies, ...universeIronMan];

//задание 10
function identifyMovies(movie) {
  if (movie.year < 2010) {
    return "Классика";
  } else {
    return "Современность";
  }
}
console.log(identifyMovies(horrorMovies[1]));