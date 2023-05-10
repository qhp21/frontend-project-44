import readlineSync from 'readline-sync';

import { calcCond, greeting } from './index.js';

export default () => {
  const name = greeting();
  console.log('What is the result of the expression?');

  let i = 0;

  while (i <= 2) {
    const generator1 = Math.floor(Math.random() * 100);
    const generator2 = Math.floor(Math.random() * 10);
    const signsArr = ['+', '-', '*'];
    const signsArrRand = Math.floor(Math.random() * signsArr.length);
    const summ = generator1 + generator2;
    const subtract = generator1 - generator2;
    const mult = generator1 * generator2;
    const question = `Question: ${generator1} ${signsArr[signsArrRand]} ${generator2} `;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (((question[13] || question[12]) === '+') && answer === summ.toString()) {
      console.log('Correct!');
    } else if (((question[13] || question[12]) === '-') && answer === subtract.toString()) {
      console.log('Correct!');
    } else if (((question[13] || question[12]) === '*') && answer === mult.toString()) {
      console.log('Correct!');
    }
    if (answer === '') {
      return console.log(`Let's try again, ${name}!`);
    } if ((answer !== summ.toString()) && ((question[13] || question[12]) === '+')) {
      return calcCond(answer, summ, name);
    } if ((answer !== subtract.toString()) && ((question[13] || question[12]) === '-')) {
      return calcCond(answer, subtract, name);
    } if ((answer !== mult.toString()) && ((question[13] || question[12]) === '*')) {
      return calcCond(answer, mult, name);
    }

    i += 1;

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return null;
};
