import readlineSync from 'readline-sync';

export const isPrime = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
};

export const greeting = () => {
    console.log('Welcome to the Brain Games!');

    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);

    return name;
};

export const celeb = (name) => {
    console.log(`Congratulations, ${name}!`);
};

export const calcCond = (answer, subtract, name) => console.log(`${answer} is wrong answer ;(. Correct answer was ${subtract}.\nLet's try again, ${name}!`);