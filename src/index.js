import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

export const getInvite = (message = '') => {
  console.log('Welcome to the Brain Games!');
  console.log(`${message}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello,  ${userName}!\n`);
  return userName;
};

export const getGame = (messageForInvite, getData) => {
  const userName = getInvite(messageForInvite);
  const maxCounter = 3;
  for (let counter = 1; counter <= maxCounter; counter += 1) {
    const pair = getData();
    const dataForQuestion = car(pair);
    const correctAnswer = cdr(pair);
    console.log(`Question: ${dataForQuestion}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};
