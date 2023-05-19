import { startGame } from '../index.js';

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

  return [question, correctAnswer];
};

const gameDescription = 'What is the result of the expression?';

export default () => {
  startGame(generateQuestion, gameDescription);
};
