import readlineSync from 'readline-sync';
import { greeting, getRandomNumber } from '../index.js';

export const progressionGame = () => {
const userName = greeting();

console.log('What number is missing in the progression?');

const maxRoundsWon = 3;
let roundsCounter = 0;
while (roundsCounter < maxRoundsWon) {

    let firstNum = getRandomNumber();
    let increment = getRandomNumber();
    let newNum = firstNum + increment;
    let randomIndex = getRandomNumber();
    
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
    
    console.log('Question: ' + progressionRow.join(' '));

    // показываем правильный ответ для быстрого тестирования
    // console.log('CorrectAnswerCheck: ' + correctAnswer);

    const userAnswer = readlineSync.question('Your answer: ');

    if (correctAnswer == userAnswer) {
        console.log('Correct!');
        roundsCounter++;
    } else {
        console.log('\'' + userAnswer + '\'' + ' is wrong answer ;(. Correct answer was ' + '\'' + correctAnswer + '\'.\nLet\'s try again, ' + userName + '!');
        break;
    }

    if (roundsCounter === maxRoundsWon) {
        console.log('Congratulations, ' + userName + '!')
    };    
    }
};