import readlineSync from 'readline-sync';

import {
  greeting,
} from '../index.js';

export default () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;

  while (i <= 2) {
    let generator1 = Math.floor(Math.random() * 100);

    let generator2 = Math.floor(Math.random() * 100);

    const question = `Question: ${generator1} ${generator2}`;
    console.log(question);
    const answer = readlineSync.question('Your answer: ');
    while ((generator1 !== 0) && (generator2 !== 0)) {
      if (generator1 > generator2) {
        generator1 %= generator2;
      } else {
        generator2 %= generator1;
      }
    }

    if (answer === (generator1 + generator2).toString()) {
      console.log('Correct');
    } else {
      return calcCond(answer, (generator1 + generator2), name);
    }
    i += 1;

    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
    }
  }
  return null;
};
