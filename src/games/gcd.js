import readlineSync from 'readline-sync';
import {greeting, getRandomNumber, getNOD} from '../index.js';

export const userName = greeting();

console.log('Find the greatest common divisor of given numbers.');

const maxRoundsWon = 3;
let roundsCounter = 0;
while (roundsCounter < maxRoundsWon) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    console.log('Question: ' + number1 + ' ' + number2);

    let corretAnswer = getNOD(number1, number2);

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
