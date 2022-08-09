import readlineSync from 'readline-sync';
import {greeting, getRandomNumber} from '../index.js';

export const userName = greeting();

console.log('What number is missing in the progression?');

let firstNum = getRandomNumber();
let increment = getRandomNumber();
let newNum = firstNum + increment;
let randomIndex = getRandomNumber();
let dots = '..';

const getProgression = () => {
    let result = [];
    result.push(firstNum);

    for (let i = 1; i < 10; i++) {
        result.push(newNum);
        newNum = newNum + increment;
    }

    return result;
}

const progressionRow = getProgression();

let correctAnswer = progressionRow[randomIndex];

delete progressionRow[randomIndex];
progressionRow[randomIndex] = '..';

console.log('Question: ' + progressionRow);
console.log('QuestionCheck: ' + correctAnswer);



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