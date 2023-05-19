import { startGame } from '../index.js';

const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + step * i);
  }
  return progression;
};

const generateQuestion = () => {
  const start = Math.floor(Math.random() * 100);
  const step = Math.floor(Math.random() * 10) + 1;
  const length = 10;
  const emptyIndex = Math.floor(Math.random() * length);
  const progression = generateProgression(start, step, length);
  const correctAnswer = progression[emptyIndex].toString();
  progression[emptyIndex] = '..';
  const question = `Question: ${progression.join(' ')}`;
  return [question, correctAnswer];
};

const gameDescription = 'What number is missing in the progression?';

export default () => {
  startGame(generateQuestion, gameDescription);
};
