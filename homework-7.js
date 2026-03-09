//уровень 1 задание 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNumbers = numbers.slice(4,10);

console.log(newNumbers);

//задание 3

const pottedPlants = ["Хлорофитум", "Сансевиерия", "Алоэ вера", "Замиокулькас", "Эпипремнум", "Фикус Бенджамина"];

const pottedPlantsNew = pottedPlants.includes("Алоэ вера");

console.log(pottedPlantsNew);

//задание 4

pottedPlants.reverse();

console.log(pottedPlants);

numbers.reverse();

console.log(numbers);

//уровень 2 
//задание 6

import { socialComments } from "./comments.js";

//задание 7

const hasCommentsCom = socialComments.filter(comment => comment.email.endsWith(".com"));

console.log(hasCommentsCom);

//задание 8

const iterateId = socialComments.map(comment => ({...comment, posId: comment.id <= 5 ? 2 : 1 }));
console.log(iterateId)

//задание 9

const getNewComments = socialComments.map(comment => ({
  id: comment.id,
  name: comment.name
}));
console.log(getNewComments)

//задание 10



const updateSocialComments = socialComments.map(comment => ({...comment, isInvalid: comment.body.length > 180}));

console.log(updateSocialComments)

//задание 11

const totalComments = socialComments.reduce((total, comment) => total + comment.body.length,0);
console.log(totalComments);

//уровень 3 
//задание 11

const onlyEmails = socialComments.reduce((acc, comment) => {acc.push({ email: comment.email});
return acc;}, []);

console.log(onlyEmails);

const getEmails = socialComments.map(comment => ({ email: comment.email}));

console.log(getEmails);

//задание 12

const lineComment = onlyEmails.map(f => f.email).toString();

console.log(lineComment);

const beautifulLineEmails = onlyEmails.map(f => f.email).join("-//---//-");

console.log(beautifulLineEmails); 