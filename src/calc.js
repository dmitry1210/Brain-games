import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

export const userName = readlineSync.question('May I have your name? ');

console.log('Hello, ' + userName + '!\nWhat is the result of this expression?');

const maxRoundsWon = 3;
let roundsCounter = 0;
while (roundsCounter < maxRoundsWon) {
    const getRandomNumber1 = () => {
        return Math.round(Math.random() * 10);
    }
    let number1 = getRandomNumber1();

    const getRandomNumber2 = () => {
        return Math.round(Math.random() * 10);
    }
    let number2 = getRandomNumber2();

    console.log('Question: ' + number1 + ' + ' + number2);
    let corretAnswer = number1 + number2;

    const userAnswer = readlineSync.question('Your answer: ');
    
    if (corretAnswer == userAnswer) {
        console.log('Correct!');
        roundsCounter++;
} else {
    console.log('Sorry.');
}
}
if (roundsCounter === maxRoundsWon) {
    console.log('Congratulations, ' + userName + '!')
};
