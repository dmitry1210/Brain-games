import readlineSync from 'readline-sync';
import {greeting, getRandomNumber} from '../index.js';

export const userName = greeting();

console.log('Find the greatest common divisor of given numbers.');

const maxRoundsWon = 3;
let roundsCounter = 0;
while (roundsCounter < maxRoundsWon) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const getNOD = (number1, number2) => {
        if (number2 !== 0) {
            const k = number1 % number2;
            return getNOD(number2, k);
        }
        return number1;
    };

    console.log('Question: ' + number1 + ' ' + number2);

    let corretAnswer = getNOD();

    const userAnswer = readlineSync.question('Your answer: ');

    if (corretAnswer == userAnswer) {
        console.log('Correct!');
        roundsCounter++;
    } else {
        console.log('\'' + userAnswer + '\'' + ' is wrong answer ;(. Correct answer was ' + '\'' + corretAnswer + '\'.\nLet\'s try again, ' + userName + '!');
        break;
    }

    if (roundsCounter === maxRoundsWon) {
        console.log('Congratulations, ' + userName + '!')
    };    
};
