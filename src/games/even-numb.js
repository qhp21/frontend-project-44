import readlineSync from 'readline-sync';
import { runGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const number = Math.round(Math.random() * 100);
  const question = `Question: ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return { question, correctAnswer: answer };
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  runGame(generateQuestion, gameDescription, name);
};
