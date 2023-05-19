import readlineSync from 'readline-sync';
import { runGame } from '../index.js';

const generateQuestion = () => {
  let generator1 = Math.floor(Math.random() * 100);
  let generator2 = Math.floor(Math.random() * 100);

  const question = `Question: ${generator1} ${generator2}`;

  while (generator1 !== 0 && generator2 !== 0) {
    if (generator1 > generator2) {
      generator1 %= generator2;
    } else {
      generator2 %= generator1;
    }
  }

  const correctAnswer = (generator1 + generator2).toString();

  return { question, correctAnswer };
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  runGame(generateQuestion, gameDescription, name);
};
