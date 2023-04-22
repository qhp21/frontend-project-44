import readlineSync from 'readline-sync';
import {
    isPrime,
    greeting,
    celeb,
} from './index.js';

export default () => {
    let i = 0;
    const name = greeting();
    console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

    while (i <= 2) {
        const generator1 = Math.floor(Math.random() * 100);
        const question = `Question: ${generator1}`;
        console.log(question);
        const answer = readlineSync.question('Your answer: ');

        if ((isPrime(generator1) === true && answer === 'yes') || (isPrime(generator1) === false && answer === 'no')) {
            console.log('Correct!');
        } else if (isPrime(generator1) === true && answer === 'no') {
            return console.log(`"no" is wrong answer ;(. Correct answer was "yes"\nLet's try again, ${name}!`);
        } else if (isPrime(generator1) === false && answer === 'yes') {
            return console.log(`"no" is wrong answer ;(. Correct answer was "yes"\nLet's try again, ${name}!`);
        } else {
            return console.log(`You should type only "yes" or "no".\nLet's try again, ${name}!`);
        }

        i += 1;
        if (i === 3) {
            celeb(name);
        }
    }
    return null;
};