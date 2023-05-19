import readlineSync from 'readline-sync';
import { runGame } from '../index.js';

export const calcCond = (answer, subtract, name) => console.log(`${answer} is wrong answer ;(. Correct answer was ${subtract}.\nLet's try again, ${name}!`);

const generateQuestion = () => {
  const generator1 = Math.floor(Math.random() * 100);
  const generator2 = Math.floor(Math.random() * 10);
  const signsArr = ['+', '-', '*'];
  const signsArrRand = Math.floor(Math.random() * signsArr.length);
  const summ = generator1 + generator2;
  const subtract = generator1 - generator2;
  const mult = generator1 * generator2;
  const question = `Question: ${generator1} ${signsArr[signsArrRand]} ${generator2} `;
  let correctAnswer;

  if (signsArr[signsArrRand] === '+') {
    correctAnswer = summ.toString();
  } else if (signsArr[signsArrRand] === '-') {
    correctAnswer = subtract.toString();
  } else if (signsArr[signsArrRand] === '*') {
    correctAnswer = mult.toString();
  }

  return { question, correctAnswer };
};

const gameDescription = 'What is the result of the expression?';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  runGame(generateQuestion, gameDescription, name);
};
