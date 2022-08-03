import readlineSync from 'readline-sync';
import {greeting, getRandomNumber} from '../index.js';

export const userName = greeting();

console.log('What is the result of this expression?');

const maxRoundsWon = 3;
let roundsCounter = 0;
while (roundsCounter < maxRoundsWon) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();

    const operatorsArr = ['+', '-', '*'];
    const getRandomOperator = () => {
        return operatorsArr[Math.floor(Math.random() * operatorsArr.length)];
    } 
    let operator = getRandomOperator();

    console.log('Question: ' + number1 + ' ' + operator + ' ' + number2);

    let corretAnswer = 1;
    switch (operator) {
        case '+':
            corretAnswer = number1 + number2;
            break;
        case '-':
            corretAnswer = number1 - number2;
            break;
        case '*':
            corretAnswer = number1 * number2;
            break;
    };

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
