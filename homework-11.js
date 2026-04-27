import { Cafe } from './Cafe.js';
import { Coffee } from './Coffee.js';
import { Tea } from './Tea.js';
import { Lemonade } from './Lemonade.js';

const myCafe = new Cafe("Звездный путь", "ул. Космонавтов, 1");
const myCoffee = new Coffee('Капучино', 200, 450, 80, 'зерна Эфиопии', 'мелкоизмельченные зерна', 'коровье молоко', 'подсластитель');
myCafe.orderDrink(myCoffee);