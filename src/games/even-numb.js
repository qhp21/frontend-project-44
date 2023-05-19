import { startGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateQuestion = () => {
  const number = Math.round(Math.random() * 100);
  const question = `Question: ${number}`;
  const answer = isEven(number) ? 'yes' : 'no';
  return [question, answer];
};

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  startGame(generateQuestion, gameDescription);
};
