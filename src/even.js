import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName + '!\nAnswer "yes" if the number is even, otherwise answer "no".');

const maxRoundsWon = 3;
let roundsCounter = 0;
while (roundsCounter < maxRoundsWon) {
    const getRandomNumber = () => {
        return Math.round(Math.random() * 10);
    }

    let number = getRandomNumber();

    console.log('Question: ' + number);
    const userAnswer = readlineSync.question('Your answer: ');

    if ((number % 2 === 0) && (userAnswer === 'yes')) {
        console.log('Correct!');
        roundsCounter++;
    } else if (number % 2 != 0 && userAnswer === 'no') {
        console.log('Correct!');
        roundsCounter++;
    } else if ((number % 2 === 0) && (userAnswer != 'yes')) {
        console.log('\'' + userAnswer + '\'' + ' is wrong answer ;(. Correct answer was \'yes\'.\nLet\'s try again, ' + userName + '!');
        break;
    } else if ((number % 2 != 0) && (userAnswer != 'no')) {
        console.log('\'' + userAnswer + '\'' + ' is wrong answer ;(. Correct answer was \'no\'.\nLet\'s try again, ' + userName + '!');
        break;
    }
}
if (roundsCounter === maxRoundsWon) {
    console.log('Congratulations, ' + userName + '!')
};