import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');

  let i = 0;

  while (i <= 2) {
    const generator1 = Math.floor(Math.random() * 100);

    const generator2 = Math.floor(Math.random() * 10) + 1;

    const emptyI = Math.floor(Math.random() * 10);

    let progressI = 0;

    let progressInt = generator1;

    let realAnswer;
    let progressStr = '';
    while (progressI <= 9) {
      if (emptyI === progressI) {
        progressStr += '..';
        progressStr += ' ';
        progressInt += generator2;
        realAnswer = progressInt;
      } else {
        progressStr += progressInt + generator2;
        progressInt += generator2;
        progressStr += ' ';
      }
      progressI += 1;
    }

    const question = `Question: ${progressStr}`;
    console.log(question);

    const answer = readlineSync.question('Your answer: ');

    if (answer === realAnswer.toString()) {
      console.log('Correct');
    } else {
      return console.log(`'${answer}' is wrong answer ;(. Correct answer was '${realAnswer}'.\nLet's try again, ${name}!`);
    }
    i += 1;
    if (i === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
  }
  return null;
};
