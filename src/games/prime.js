import readlineSync from 'readline-sync';
import { runGame } from '../index.js';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const generateQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  const question = `Question: ${number}`;
  const answer = isPrime(number) ? 'yes' : 'no';
  return { question, correctAnswer: answer };
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(gameDescription);
  runGame(generateQuestion, gameDescription, name);
};