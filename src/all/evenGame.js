import readlineSync from 'readline-sync';
import getInvite from '..';

const getRandomNumber = () => {
  const randomNumber = Math.floor((Math.random() * 100) + 1);
  return randomNumber;
};

const isEvenNumber = (num) => {
  if ((num % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const askQuestion = () => {
  const userName = getInvite();
  for (let counter = 1; counter <= 3; counter += 1) {
    const randomN = getRandomNumber();
    const rightAnswer = isEvenNumber(randomN);
    console.log(`Question: ${randomN}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.\n Let's try again, ${userName}!`);
    }
    console.log('Correct!');
  }
  return console.log(`Congratulations, ${userName}!`);
};

export default () => {
  askQuestion();
};
