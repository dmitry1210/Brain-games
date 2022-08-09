import readlineSync from 'readline-sync';
import {greeting, getRandomNumber, getRandomNumber100} from '../index.js';

export const userName = greeting();

console.log('What number is missing in the progression?');

let firstNum = getRandomNumber();
let incremnent = getRandomNumber();
let newNum = firstNum + incremnent;

const getProgression = () => {
    let result = [];
    result.push(firstNum);

    for (let i = 1; i < 10; i++) {
        result.push(newNum);
        newNum = newNum + incremnent;
    }
    return result;
}

const progressionRow = getProgression();

console.log('Question: ' + progressionRow);





// const maxRoundsWon = 3;
// let roundsCounter = 0;
// while (roundsCounter < maxRoundsWon) {

//     let corretAnswer = getNOD(number1, number2);

//     const userAnswer = readlineSync.question('Your answer: ');

//     if (corretAnswer == userAnswer) {
//         console.log('Correct!');
//         roundsCounter++;
//     } else {
//         console.log('\'' + userAnswer + '\'' + ' is wrong answer ;(. Correct answer was ' + '\'' + corretAnswer + '\'.\nLet\'s try again, ' + userName + '!');
//         break;
//     }

//     if (roundsCounter === maxRoundsWon) {
//         console.log('Congratulations, ' + userName + '!')
//     };    
// };