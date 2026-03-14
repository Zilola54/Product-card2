import { socialComments } from "./comments.js";

//уровень 1 задание 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const filteredNumbers = numbers.slice(4, 10);
console.log(filteredNumbers);

//задание 3

const plants = ["Хлорофитум", "Сансевиерия", "Алоэ вера", "Замиокулькас", "Эпипремнум", "Фикус Бенджамина"];
console.log(plants.includes("Алоэ вера"));

//задание 4

function getReversed(array) {
  return array.reverse();
};
console.log(getReversed(plants));

console.log(getReversed(numbers));

//уровень 2 
//задание 7

const commentsWithComEmails = socialComments.filter(comment => comment.email.endsWith(".com"));
console.log(commentsWithComEmails);

//задание 8

const updatedComments = socialComments.map(comment => ({
  ...comment, 
  postId: comment.id <= 5 ? 2 : 1
}));
console.log(updatedComments)

//задание 9

const formattedComments = socialComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(formattedComments)

//задание 10

const commentsWithValidation = socialComments.map(comment => ({
  ...comment,
  isInvalid: comment.body.length > 180
}));

//уровень 3 
//задание 11

const emailsByReduce = socialComments.reduce((acc, comment) => {
  acc.push(comment.email);
  return acc;
}, []);
console.log(emailsByReduce);

const emailsByMap = socialComments.map(comment => (comment.email));
console.log(emailsByMap);

//задание 12

const emailsByString = emailsByMap.toString();
console.log(emailsByString);

const bemailsByJoin = emailsByMap.join("  -  ");
console.log(bemailsByJoin); 